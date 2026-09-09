const loginForm = document.querySelector('#login-form');
if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const status = document.querySelector('#login-status');
        const response = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(loginForm))) });
        const result = await response.json();
        if (!response.ok) { status.textContent = result.error; return; }
        window.location.href = 'admin.html';
    });
}