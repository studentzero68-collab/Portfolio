import { useEffect, useRef, useState } from 'react';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
    const [projects, setProjects] = useState(null);
    const grid = useRef(null);
    useEffect(() => { fetch('/api/projects').then((response) => { if (!response.ok) throw new Error(); return response.json(); }).then(setProjects).catch(() => setProjects([])); }, []);
    useEffect(() => {
        if (!grid.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
        let paused = false; let resumeTimer;
        const pause = () => { paused = true; window.clearTimeout(resumeTimer); };
        const resume = () => { window.clearTimeout(resumeTimer); resumeTimer = window.setTimeout(() => { paused = false; }, 4000); };
        const element = grid.current; ['mouseenter', 'touchstart', 'wheel'].forEach((event) => element.addEventListener(event, pause, { passive: true })); ['mouseleave', 'touchend'].forEach((event) => element.addEventListener(event, resume, { passive: true }));
        const timer = window.setInterval(() => { if (paused) return; const card = element.querySelector('.project-card'); if (!card) return; const max = element.scrollWidth - element.clientWidth; if (max <= 0) return; element.scrollTo({ left: element.scrollLeft >= max - 4 ? 0 : element.scrollLeft + card.offsetWidth + 28, behavior: 'smooth' }); }, 4500);
        return () => { window.clearInterval(timer); window.clearTimeout(resumeTimer); };
    }, [projects]);
    return <><PageHero eyebrow="Projects" title="Work that reflects my growth">Each project sharpened my design thinking, JavaScript confidence, and ability to turn ideas into usable interfaces.</PageHero><section ref={grid} className="detail-section projects-grid">{projects === null ? <p className="projects-status">Loading projects...</p> : projects.length ? projects.map((project) => <ProjectCard project={project} key={project.id} />) : <p className="projects-status">Projects are temporarily unavailable.</p>}</section></>;
}