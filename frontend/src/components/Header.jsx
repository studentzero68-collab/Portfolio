import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const links = [['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/skills', 'Skills'], ['/contact', 'Contact']];

export default function Header() {
    const location = useLocation();
    const [admin, setAdmin] = useState(false);
    useEffect(() => { fetch('/api/auth/me').then((response) => response.json()).then(({ user }) => setAdmin(user?.role === 'admin')).catch(() => setAdmin(false)); }, [location.pathname]);
    return <header className="navbar"><Link to="/" className="logo">Mukelani</Link><div className="navbar-actions"><nav aria-label="Main navigation">{links.map(([path, label]) => <Link key={path} to={path} className={`nav-link${location.pathname === path ? ' active' : ''}`} aria-current={location.pathname === path ? 'page' : undefined}>{label}</Link>)}</nav><Link to={admin ? '/admin' : '/login'} className="nav-link auth-link">{admin ? 'Admin dashboard' : 'Owner login'}</Link><ThemeToggle /></div></header>;
}