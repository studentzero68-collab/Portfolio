import Icon from './Icon';
import TechnologyBadge from './TechnologyBadge';

export default function CaseStudy({ project, open, onToggle }) {
    const panelId = `${project.id}-case-study`;
    return <>
        {!open && <button className="case-study-toggle" type="button" aria-expanded={false} aria-controls={panelId} onClick={() => onToggle(project.id)}>
            <Icon name="layers" /> View Case Study
        </button>}
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
                <div className="tools-used"><div><h5>Skills</h5><div className="tool-list">{project.skills.map((skill) => <TechnologyBadge name={skill} key={skill} />)}</div></div>{project.tools.length > 0 && <div><h5>Tools</h5><div className="tool-list">{project.tools.map((tool) => <TechnologyBadge name={tool} key={tool} />)}</div></div>}</div>
                <div className="case-study-links">{project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">View live project <Icon name="external" /></a>}{project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">View GitHub <Icon name="github" /></a>}</div>
            </div>
        </div>
        {open && <button className="case-study-toggle" type="button" aria-expanded={true} aria-controls={panelId} onClick={() => onToggle(project.id)}>
            <Icon name="layers" /> Close Case Study
        </button>}
    </>;
}
