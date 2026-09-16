import Icon from '../components/Icon';
import NextPage from '../components/NextPage';

const skills = [
    ['HTML', 'Building semantic and accessible web structures.', 'code'],
    ['CSS', 'Creating responsive layouts and visual systems.', 'layers'],
    ['JavaScript', 'Adding logic, functionality, and interaction.', 'code'],
    ['React', 'Building reusable components and modern interfaces.', 'spark'],
    ['Node.js', 'Learning server-side APIs and application structure.', 'layers'],
    ['MongoDB', 'Working with data modeling in full-stack projects.', 'layers'],
    ['Firebase', 'Connecting authentication and hosted application data.', 'check'],
    ['Figma', 'Thinking through interface structure before building.', 'spark'],
    ['Git / GitHub', 'Tracking work and sharing projects clearly.', 'github'],
    ['Resilience', 'Recovering quickly, adapting under pressure, and continuing to improve.', 'spark'],
    ['Integrity', 'Acting honestly, professionally, and with consistency in every task.', 'check'],
    ['Personal responsibility', 'Taking ownership of my work, learning from mistakes, and delivering reliably.', 'layers']
];

export default function SkillsPage() {
    return <><section className="page-intro section-light"><p className="eyebrow">Skills & tools</p><h1>What I reach for when I’m building.</h1><p>No percentages, no performance theatre. These are the tools and disciplines I’m actively using, practicing, and strengthening.</p></section><section className="skills-section"><div className="skills-heading"><span className="section-kicker">A working toolkit</span><p>Swipe through the skills on smaller screens.</p></div><div className="skills-rail">{skills.map(([name, description, icon]) => <article className="skill-card" key={name}><Icon name={icon} /><h2>{name}</h2><p>{description}</p></article>)}</div></section><section className="learning-section"><div className="learning-heading"><span className="section-kicker">Currently learning</span><p>Building confidence with backend fundamentals.</p></div><article className="skill-card learning-card"><Icon name="code" /><h2>Python</h2><p>Exploring programming fundamentals and backend logic.</p></article></section><NextPage to="/projects" label="Projects" description="Now see those skills and tools in motion through the work I’ve built." /></>;
}
