import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import NextPage from '../components/NextPage';
import projects from '../data/projects';
import Icon from '../components/Icon';

export default function ProjectsPage() {
    const [activeProjectId, setActiveProjectId] = useState(null);
    function toggleProject(id) { setActiveProjectId((current) => current === id ? null : id); }
    return <><section className="page-intro section-purple project-intro"><p className="eyebrow">Selected projects</p><h1>Things I’ve made while learning to make better things.</h1><p>Real projects, real constraints, and a growing understanding of how the pieces fit together.</p></section><section className="projects-showcase"><div className="showcase-header"><div><span className="section-kicker">{projects.length} projects / one evolving practice</span><h2>Scroll the work</h2></div><p>Each card has a compact case study with the thinking behind it.</p></div><div className="projects-rail" aria-label="Portfolio projects">{projects.map((project) => <ProjectCard key={project.id} project={project} expanded={activeProjectId === project.id} onToggle={toggleProject} />)}</div></section><section className="projects-cta"><p className="eyebrow">Want to talk through a project?</p><h2>Let’s make the next idea clearer.</h2><Link to="/contact" className="btn btn-dark">Get in touch <Icon name="arrow" /></Link></section><NextPage to="/contact" label="Contact" /></>;
}
