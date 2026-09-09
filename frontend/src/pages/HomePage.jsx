import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WaveDivider from '../components/WaveDivider';

export default function HomePage() {
    const [intro, setIntro] = useState(() => sessionStorage.getItem('portfolio-intro-seen') !== 'true');
    useEffect(() => { if (!intro) return undefined; sessionStorage.setItem('portfolio-intro-seen', 'true'); const timer = window.setTimeout(() => setIntro(false), 2600); return () => window.clearTimeout(timer); }, [intro]);
    return <>
        {intro && <div className="wakanda-intro"><div className="wakanda-rings"><span /><span /><span /></div><p className="wakanda-intro-text">Mukelani</p><p className="wakanda-intro-sub">Kindling the flame...</p></div>}
        <section className="hero"><div className="hero-content"><p className="hero-role">Junior Full-Stack Developer · iHub Africa, Gauteng</p><h2>Building my future through web experiences.</h2><p className="hero-tagline">I turn an idea into something live and working — front end, back end, authentication, and a real database — not just a UI mockup. I learn the tool a project actually needs the moment it needs it, and I debug from first principles instead of guessing.</p><div className="hero-actions"><Link to="/projects" className="btn">View My Work</Link><a href="https://github.com/studentzero68-collab" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a></div></div><div className="hero-image"><img src="/images/ChatGPT Image Jul 15, 2026, 02_55_11 PM.png" alt="Mukelani N. Sindana" /></div></section>
        <WaveDivider id="home-wave" />
        <section className="section dark"><div className="overview-grid"><Overview label="About" title="My Background & Approach" text="Learn more about the values, mindset, and growth behind my work as a developing full-stack developer." to="/about" action="Explore" /><Overview label="Projects" title="Selected Work" text="Review the websites and interactive experiences I’ve built, from UI-inspired interfaces to practical web apps." to="/projects" action="View Projects" /><Overview label="Skills" title="Current Strengths" text="See the technologies I work with confidently today and the areas I’m actively strengthening through practice." to="/skills" action="View Skills" /><Overview label="Contact" title="Let’s Connect" text="Reach out for opportunities, collaborations, or conversations about building thoughtful digital experiences." to="/contact" action="Get in Touch" /></div></section>
    </>;
}

function Overview({ label, title, text, to, action }) { return <article className="overview-card"><p className="eyebrow">{label}</p><h3>{title}</h3><p>{text}</p><Link to={to} className="btn btn-secondary">{action}</Link></article>; }