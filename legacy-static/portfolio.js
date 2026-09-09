function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

function projectCard(project) {
    const liveLink = project.live_url ? `<a href="${escapeHtml(project.live_url)}" target="_blank" rel="noopener noreferrer" class="btn btn-small">Live Demo</a>` : '';
    const sourceLink = project.source_url ? `<a href="${escapeHtml(project.source_url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-small">Source Code</a>` : '';
    return `<article class="project-card detail-card${project.featured ? ' project-featured' : ''}">
        ${project.featured ? '<p class="project-badge">Featured</p>' : ''}
        <h3>${escapeHtml(project.title)}</h3>
        ${project.category ? `<p class="project-category">${escapeHtml(project.category)}</p>` : ''}
        <div class="slider">${project.image ? `<img src="${escapeHtml(project.image)}" class="slide active" alt="${escapeHtml(project.title)} preview">` : '<div class="slide-placeholder">No preview image</div>'}</div>
        <div class="project-tags">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
        <p>${escapeHtml(project.description)}</p>
        <div class="project-links">${liveLink}${sourceLink}</div>
    </article>`;
}

async function loadProjects() {
    const list = document.querySelector('#projects-list');
    if (!list) return;
    try {
        const response = await fetch('/api/projects');
        if (!response.ok) throw new Error('Unable to load projects.');
        const projects = await response.json();
        list.innerHTML = projects.length ? projects.map(projectCard).join('') : '<p class="projects-status">No projects published yet.</p>';
    } catch (error) {
        list.innerHTML = '<p class="projects-status">Projects are temporarily unavailable. Please try again shortly.</p>';
    }
}

async function updateAuthLink() {
    const link = document.querySelector('[data-auth-link]');
    if (!link) return;
    const response = await fetch('/api/auth/me');
    const { user } = await response.json();
    if (user?.role === 'admin') {
        link.textContent = 'Admin dashboard';
        link.href = 'admin.html';
    }
}

loadProjects();
updateAuthLink();