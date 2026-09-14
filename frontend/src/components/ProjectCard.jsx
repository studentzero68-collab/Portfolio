import { useEffect, useState } from 'react';
import CaseStudy from './CaseStudy';
import Icon from './Icon';
import TechnologyBadge from './TechnologyBadge';

export default function ProjectCard({ project, expanded, onToggle }) {
    const [visible, setVisible] = useState(true);
    const image = project.image && (project.image.startsWith('/') || project.image.startsWith('http') ? project.image : `/${project.image}`);
    useEffect(() => { setVisible(true); }, [image]);
    return <article className={`project-card detail-card${project.featured ? ' project-featured' : ''}${expanded ? ' is-expanded' : ''}`}><div className="project-card-top">{project.featured && <p className="project-badge">Featured project</p>}<h3>{project.title}</h3><div className="slider">{image && visible ? <img src={image} className="slide active" loading="lazy" alt={`${project.title} screenshot`} onError={() => setVisible(false)} /> : <div className="slide-placeholder">Project preview unavailable</div>}</div><div className="project-tech-groups"><div><h4>Skills</h4><div className="technology-list">{project.skills.map((skill) => <TechnologyBadge name={skill} key={skill} />)}</div></div>{project.tools.length > 0 && <div><h4>Tools</h4><div className="tool-list">{project.tools.map((tool) => <TechnologyBadge name={tool} key={tool} />)}</div></div>}</div><p className="project-description">{project.description}</p><div className="project-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-small">Live Link <Icon name="external" /></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-small">Source Code <Icon name="github" /></a>}</div></div><CaseStudy project={project} open={expanded} onToggle={onToggle} /></article>;
}