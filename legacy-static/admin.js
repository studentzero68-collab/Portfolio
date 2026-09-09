const form = document.querySelector('#project-form');
const statusMessage = document.querySelector('#admin-status');
const projectList = document.querySelector('#admin-projects');
let projects = [];

function field(id) { return document.querySelector(`#${id}`); }
function showStatus(message) { statusMessage.textContent = message; }
function clearForm() { form.reset(); field('project-id').value = ''; field('image-preview').textContent = 'No image selected'; }

function renderAdminProjects() {
    projectList.innerHTML = projects.map((project) => `<article class="admin-project-row"><div>${project.image ? `<img class="admin-project-thumb" src="${project.image}" alt="">` : ''}<h3>${project.title}</h3><p>${project.description}</p><small>${project.category ? `${project.category} · ` : ''}${project.tags.join(' · ')}</small></div><div class="admin-row-actions"><button class="btn btn-small" data-edit="${project.id}">Edit</button><button class="btn btn-outline btn-small" data-delete="${project.id}">Delete</button></div></article>`).join('');
}

async function loadAdminProjects() {
    const response = await fetch('/api/projects');
    if (response.status === 401) { window.location.href = 'login.html'; return; }
    projects = await response.json(); renderAdminProjects();
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const id = field('project-id').value;
    const body = new FormData();
    body.append('title', field('title').value); body.append('description', field('description').value); body.append('tags', field('tags').value); body.append('category', field('category').value); body.append('live_url', field('live-url').value); body.append('source_url', field('source-url').value); body.append('featured', field('featured').checked ? 'true' : ''); body.append('remove_image', field('remove-image').checked ? 'true' : 'false');
    if (field('image').files[0]) body.append('image', field('image').files[0]);
    const response = await fetch(id ? `/api/projects/${id}` : '/api/projects', { method: id ? 'PUT' : 'POST', body });
    const result = await response.json();
    if (!response.ok) { showStatus(result.error); return; }
    clearForm(); showStatus(id ? 'Project updated.' : 'Project added.'); await loadAdminProjects();
});

projectList.addEventListener('click', async (event) => {
    const editId = event.target.dataset.edit;
    const deleteId = event.target.dataset.delete;
    if (editId) {
        const project = projects.find((item) => item.id === Number(editId));
        field('project-id').value = project.id; field('title').value = project.title; field('description').value = project.description; field('image').value = ''; field('category').value = project.category || ''; field('tags').value = project.tags.join(', '); field('live-url').value = project.live_url; field('source-url').value = project.source_url; field('featured').checked = project.featured; field('remove-image').checked = false; field('image-preview').innerHTML = project.image ? `<img src="${project.image}" alt="Current project image preview">` : 'No image selected'; window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (deleteId && window.confirm('Delete this project from the portfolio?')) {
        const response = await fetch(`/api/projects/${deleteId}`, { method: 'DELETE' });
        if (response.ok) { showStatus('Project deleted.'); await loadAdminProjects(); }
    }
});

document.querySelector('#cancel-edit').addEventListener('click', clearForm);
document.querySelector('#logout-button').addEventListener('click', async () => { await fetch('/api/auth/logout', { method: 'POST' }); window.location.href = 'login.html'; });
loadAdminProjects();

field('image').addEventListener('change', () => {
    const file = field('image').files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    field('image-preview').innerHTML = `<img src="${previewUrl}" alt="New project image preview">`;
});