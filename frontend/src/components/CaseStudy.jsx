import Icon from './Icon';

export default function CaseStudy({ project, open, onToggle }) {
    const panelId = `${project.id}-case-study`;
    return <>
        <button className="case-study-toggle" type="button" aria-expanded={open} aria-controls={panelId} onClick={() => onToggle(project.id)}>
            <Icon name="layers" /> {open ? 'Close Case Study' : 'View Case Study'}
        </button>
        <div className={`case-study-panel${open ? ' is-open' : ''}`} id={panelId} aria-hidden={!open}>
            <div className="case-study-content">
                <div className="case-study-heading"><span>Case study</span><h4>{project.title}</h4></div>
                <div className="case-study-copy">
                    <div><h5>Overview</h5><p>{project.caseStudy.overview}</p></div>
                    <div><h5>Problem / purpose</h5><p>{project.caseStudy.problem}</p></div>
                    <div><h5>Approach</h5><p>{project.caseStudy.approach}</p></div>
                    <div><h5>What I built</h5><p>{project.caseStudy.solution}</p></div>
                    <div><h5>Challenges</h5><p>{project.caseStudy.challenges}</p></div>
                    <div><h5>What I learned</h5><p>{project.caseStudy.lessons}</p></div>
                    <div><h5>Future improvements</h5><p>{project.caseStudy.improvements}</p></div>
                    <div><h5>Outcome</h5><p>{project.caseStudy.outcome}</p></div>
                </div>
                <div className="tools-used"><h5>Tools used</h5><div className="tool-list">{project.caseStudy.tools.map((tool) => <span className="tool-badge" key={tool}><Icon name="code" />{tool}</span>)}</div></div>
                <div className="case-study-links">{project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">View live project <Icon name="external" /></a>}{project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">View GitHub <Icon name="github" /></a>}</div>
            </div>
        </div>
    </>;
}
