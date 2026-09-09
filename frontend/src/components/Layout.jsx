import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
    const location = useLocation();
    useEffect(() => { document.body.className = 'portfolio-ready'; }, [location.pathname]);
    return <><div className="page-bg" aria-hidden="true" /><div className="page-bg-overlay" aria-hidden="true" /><div className="page-wrapper"><Header /><Outlet /><Footer /></div></>;
}