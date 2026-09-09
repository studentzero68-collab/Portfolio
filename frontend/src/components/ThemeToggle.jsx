import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [light, setLight] = useState(() => localStorage.getItem('portfolio-theme') === 'light');
    useEffect(() => { if (light) document.documentElement.setAttribute('data-theme', 'light'); else document.documentElement.removeAttribute('data-theme'); localStorage.setItem('portfolio-theme', light ? 'light' : 'dark'); }, [light]);
    return <button type="button" className="theme-toggle" aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'} onClick={() => setLight((value) => !value)}>{light ? '◐' : '☼'}</button>;
}