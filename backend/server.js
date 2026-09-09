require('dotenv').config();

const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const multer = require('multer');

const app = express();
const port = Number(process.env.PORT || 3000);
const root = __dirname;
const frontendDist = path.join(root, '..', 'frontend', 'dist');
const uploadsDirectory = path.join(root, 'uploads');
const database = new Database(path.join(root, 'portfolio.db'));
fs.mkdirSync(uploadsDirectory, { recursive: true });

if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD || !process.env.SESSION_SECRET) {
    throw new Error('Set ADMIN_EMAIL, ADMIN_PASSWORD, and SESSION_SECRET in .env before starting the server.');
}

database.pragma('journal_mode = WAL');
database.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL CHECK (role = 'admin')
    );
    CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        tags TEXT NOT NULL,
        category TEXT NOT NULL DEFAULT '',
        live_url TEXT NOT NULL DEFAULT '',
        source_url TEXT NOT NULL DEFAULT '',
        featured INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
`);

const projectColumns = database.prepare('PRAGMA table_info(projects)').all().map((column) => column.name);
if (!projectColumns.includes('category')) database.exec("ALTER TABLE projects ADD COLUMN category TEXT NOT NULL DEFAULT ''");

const admin = database.prepare('SELECT id FROM users WHERE email = ?').get(process.env.ADMIN_EMAIL);
if (!admin) {
    database.prepare('INSERT INTO users (email, password_hash, role) VALUES (?, ?, ?)').run(
        process.env.ADMIN_EMAIL,
        bcrypt.hashSync(process.env.ADMIN_PASSWORD, 12),
        'admin'
    );
}
database.prepare('DELETE FROM users WHERE email <> ?').run(process.env.ADMIN_EMAIL);

const seedProjects = [
    ['Tesla UI Clone', 'A polished Tesla-inspired landing page focused on modern layout design and visual storytelling.', 'images/images (3).jpg', 'HTML,CSS,Responsive', 'https://studentzero68-collab.github.io/Tesla-project-mukelani/', 'https://github.com/studentzero68-collab/Tesla-project-mukelani', 0],
    ['Netflix Landing Page', 'A responsive Netflix-inspired page with strong visual identity and attention to layout and user flow.', 'images/Screenshot 2026-05-26 140856.png', 'HTML,CSS,Flexbox', 'https://studentzero68-collab.github.io/Netflix/', 'https://github.com/studentzero68-collab/Netflix', 0],
    ['To-Do List App', 'A functional productivity app with filters, task states, and local persistence for everyday usability.', 'images/Screenshot 2026-05-21 142913.png', 'HTML,CSS,JavaScript,Local Storage', 'https://studentzero68-collab.github.io/To-do-list/', 'https://github.com/studentzero68-collab/To-do-list', 1],
    ['YouTube Clone', 'A dynamic clone that pushed me to work with APIs, video content, and interactive components.', 'images/Screenshot 2026-06-15 110911.png', 'HTML,CSS,JavaScript', 'https://studentzero68-collab.github.io/Youtube-basic/', 'https://github.com/studentzero68-collab/Youtube-basic', 0],
    ['Bakery Project', 'A responsive bakery page with strong visual identity and attention to layout and user flow.', 'images/Screenshot 2026-07-06 084144.png', 'HTML,CSS,Flexbox', 'https://studentzero68-collab.github.io/Bakery-project1/', 'https://github.com/studentzero68-collab/Bakery-project1.git', 0],
    ['Quiz Widget Project', 'A group-based project page with strong visual identity and attention to layout and user flow.', 'images/Screenshot 2026-07-06 090005.png', 'HTML,CSS,Flexbox,JavaScript', 'https://kmukendi10.github.io/quiz-widget-project/', 'https://github.com/KMukendi10/quiz-widget-project.git', 0],
    ['Ihub Prototype Project', 'A group-based project page with strong visual identity and attention to layout and user flow.', 'images/Screenshot 2026-07-06 093822.png', 'HTML,CSS,Flexbox,JavaScript', 'https://giftmshengu250-pixel.github.io/Ihub-Prototype75/', 'https://github.com/giftmshengu250-pixel/Ihub-Prototype75.git', 0],
    ['Weather App React', 'A React weather experience built around a searchable city input, live API data, loading states, and clear error handling.', 'images/Screenshot 2026-05-26 140856.png', 'React,Vite,API,Hooks', 'https://studentzero68-collab.github.io/weather-app-', 'https://github.com/studentzero68-collab/weather-app-react.git', 1],
    ['Shopping Center', 'A multi-page shopping experience featuring product discovery, shared cart state, filters, pagination, and checkout.', 'images/Screenshot 2026-05-26 140856.png', 'React,Context API,Router,Cart Logic', 'https://studentzero68-collab.github.io/Shopping-clone/', 'https://github.com/studentzero68-collab/Shopping-clone.git', 0],
    ['Zero - Capstone Project', 'A capstone project demonstrating a complete product experience and full-stack thinking.', 'images/Screenshot 2026-05-26 140856.png', 'React,Node.js,Database', '', 'https://github.com/studentzero68-collab', 0],
    ['Urban Threads', 'A streetwear e-commerce app with Firebase Authentication, live product data, dynamic filtering, and a login-gated cart.', 'images/Screenshot 2026-05-26 140856.png', 'JavaScript,Firebase,Firestore', '', 'https://github.com/studentzero68-collab', 0]
];

if (database.prepare('SELECT COUNT(*) AS count FROM projects').get().count === 0) {
    const insert = database.prepare('INSERT INTO projects (title, description, image, tags, live_url, source_url, featured) VALUES (?, ?, ?, ?, ?, ?, ?)');
    database.transaction(() => seedProjects.forEach((project) => insert.run(...project)))();
}

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    store: new SQLiteStore({ db: 'sessions.db', dir: root }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 8 * 60 * 60 * 1000 }
}));

function requireAdmin(req, res, next) {
    if (req.session.user?.role === 'admin') return next();
    res.status(401).json({ error: 'Admin authentication required.' });
}

function publicProject(project) {
    return { ...project, tags: project.tags.split(',').map((tag) => tag.trim()).filter(Boolean), featured: Boolean(project.featured) };
}

const upload = multer({
    storage: multer.diskStorage({
        destination: uploadsDirectory,
        filename: (req, file, callback) => {
            const extension = file.mimetype.split('/')[1].replace('jpeg', 'jpg');
            callback(null, `${crypto.randomUUID()}.${extension}`);
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, callback) => {
        if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.mimetype)) {
            return callback(new Error('Only JPEG, PNG, WebP, and GIF images are allowed.'));
        }
        callback(null, true);
    }
});

function removeManagedImage(image) {
    if (!image?.startsWith('/uploads/')) return;
    const filePath = path.join(root, image.replace(/^\//, ''));
    if (filePath.startsWith(uploadsDirectory) && fs.existsSync(filePath)) fs.unlinkSync(filePath);
}

app.get('/api/projects', (req, res) => {
    res.json(database.prepare('SELECT * FROM projects ORDER BY featured DESC, created_at ASC, id ASC').all().map(publicProject));
});

app.post('/api/auth/login', (req, res) => {
    const email = String(req.body.email || '').trim().toLowerCase();
    const password = String(req.body.password || '');
    const user = database.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user || !bcrypt.compareSync(password, user.password_hash)) return res.status(401).json({ error: 'Invalid owner credentials.' });
    req.session.user = { id: user.id, email: user.email, role: user.role };
    res.json({ user: req.session.user });
});

app.post('/api/auth/logout', (req, res) => req.session.destroy(() => res.status(204).end()));
app.get('/api/auth/me', (req, res) => res.json({ user: req.session.user || null }));

function validateProject(body, existingImage = '', imageRequired = false) {
    const project = {
        title: String(body.title || '').trim(), description: String(body.description || '').trim(),
        image: String(body.image || existingImage).trim(), tags: String(body.tags || '').trim(), category: String(body.category || '').trim(),
        live_url: String(body.live_url || '').trim(), source_url: String(body.source_url || '').trim(), featured: body.featured ? 1 : 0
    };
    if (!project.title || !project.description || !project.tags || (imageRequired && !project.image)) return null;
    return project;
}

app.post('/api/projects', requireAdmin, upload.single('image'), (req, res) => {
    const project = validateProject(req.body, req.file ? `/uploads/${req.file.filename}` : '', true);
    if (!project) {
        removeManagedImage(req.file ? `/uploads/${req.file.filename}` : '');
        return res.status(400).json({ error: 'Title, description, image, and tags are required.' });
    }
    const result = database.prepare('INSERT INTO projects (title, description, image, tags, category, live_url, source_url, featured) VALUES (@title, @description, @image, @tags, @category, @live_url, @source_url, @featured)').run(project);
    res.status(201).json(publicProject(database.prepare('SELECT * FROM projects WHERE id = ?').get(result.lastInsertRowid)));
});

app.put('/api/projects/:id', requireAdmin, upload.single('image'), (req, res) => {
    const existing = database.prepare('SELECT * FROM projects WHERE id = ?').get(req.params.id);
    if (!existing) return res.status(404).json({ error: 'Project not found.' });
    const nextImage = req.file ? `/uploads/${req.file.filename}` : req.body.remove_image === 'true' ? '' : existing.image;
    const project = validateProject(req.body, nextImage);
    if (!project) {
        removeManagedImage(req.file ? `/uploads/${req.file.filename}` : '');
        return res.status(400).json({ error: 'Title, description, image, and tags are required.' });
    }
    database.prepare('UPDATE projects SET title=@title, description=@description, image=@image, tags=@tags, category=@category, live_url=@live_url, source_url=@source_url, featured=@featured WHERE id=@id').run({ ...project, id: req.params.id });
    if (existing.image !== project.image) removeManagedImage(existing.image);
    res.json(publicProject(database.prepare('SELECT * FROM projects WHERE id = ?').get(req.params.id)));
});

app.delete('/api/projects/:id', requireAdmin, (req, res) => {
    const existing = database.prepare('SELECT image FROM projects WHERE id = ?').get(req.params.id);
    if (!existing) return res.status(404).json({ error: 'Project not found.' });
    database.prepare('DELETE FROM projects WHERE id = ?').run(req.params.id);
    removeManagedImage(existing.image);
    res.status(204).end();
});

app.use('/uploads', express.static(uploadsDirectory, { fallthrough: false }));
app.use(express.static(frontendDist));
app.use((error, req, res, next) => {
    if (req.file) removeManagedImage(`/uploads/${req.file.filename}`);
    if (error instanceof multer.MulterError && error.code === 'LIMIT_FILE_SIZE') return res.status(400).json({ error: 'Image must be 5 MB or smaller.' });
    if (error) return res.status(400).json({ error: error.message || 'Upload failed.' });
    next();
});
app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    res.sendFile(path.join(frontendDist, 'index.html'), (error) => error && next(error));
});
app.listen(port, () => console.log(`Portfolio running at http://localhost:${port}`));