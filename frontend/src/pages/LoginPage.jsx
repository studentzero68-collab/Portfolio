import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();
    const [status, setStatus] = useState('');
    async function submit(event) {
        event.preventDefault(); setStatus('');
        const data = Object.fromEntries(new FormData(event.currentTarget));
        const response = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        const result = await response.json();
        if (!response.ok) { setStatus(result.error || 'Unable to sign in.'); return; }
        navigate('/admin');
    }
    return <main className="auth-panel"><p className="eyebrow">Portfolio owner</p><h1>Sign in</h1><p className="auth-intro">Manage the projects shown on your public portfolio.</p><form className="auth-form" onSubmit={submit}><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="username" required /><label htmlFor="password">Password</label><input id="password" name="password" type="password" autoComplete="current-password" required /><button className="btn" type="submit">Sign in</button><p className="form-status" role="alert">{status}</p></form></main>;
}