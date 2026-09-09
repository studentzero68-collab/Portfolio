import { useEffect, useState } from 'react';

export default function ProjectCard({ project }) {
    const [visible, setVisible] = useState(true);
    const image = project.image && (project.image.startsWith('/') || project.image.startsWith('http') ? project.image : `/${project.image}`);
    useEffect(() => { setVisible(true); }, [image]);
    return <article className={`project-card detail-card${project.featured ? ' project-featured' : ''}`}>{project.featured && <p className="project-badge">Featured</p>}<h3>{project.title}</h3>{project.category && <p className="project-category">{project.category}</p>}<div className="slider">{image && visible ? <img src={image} className="slide active" alt={`${project.title} preview`} onError={() => setVisible(false)} /> : <div className="slide-placeholder">No preview image</div>}</div><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><p>{project.description}</p><div className="project-links">{project.live_url && <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="btn btn-small">Live Demo</a>}{project.source_url && <a href={project.source_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-small">Source Code</a>}</div></article>;
}