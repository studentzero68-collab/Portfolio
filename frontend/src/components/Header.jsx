import { Link, useLocation } from 'react-router-dom';

const links = [['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/skills', 'Skills'], ['/contact', 'Contact']];

export default function Header() {
    const location = useLocation();
    return <header className="navbar"><Link to="/" className="logo">Mukelani<span>.</span></Link><nav aria-label="Main navigation">{links.map(([path, label]) => <Link key={path} to={path} className={`nav-link${location.pathname === path ? ' active' : ''}`} aria-current={location.pathname === path ? 'page' : undefined}>{label}</Link>)}</nav></header>;
}