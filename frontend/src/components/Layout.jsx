import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
    const location = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
    return <><div className="page-wrapper"><Header /><main key={location.pathname} className="route-content"><Outlet /></main><Footer /></div></>;
}