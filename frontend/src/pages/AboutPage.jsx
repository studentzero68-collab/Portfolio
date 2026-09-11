import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import NextPage from '../components/NextPage';

const sections = [
    { eyebrow: '01 / Beginning', title: 'Curiosity became a craft.', text: 'I’m Mukelani N. Sindana, a junior developer learning at iHub Africa in Gauteng, South Africa. I came to development wanting to turn ideas into visible, functional experiences, and each project has made that ambition more concrete.', image: '/images/images (1).jpg', alt: 'A visual from Mukelani\'s project work' },
    { eyebrow: '02 / Method', title: 'I learn by making things real.', text: 'I learn the tool a project actually needs when it needs it. That has meant working with browser state, APIs, React, Firebase Authentication, and Firestore instead of waiting until everything feels familiar. The process is practical, curious, and grounded in finishing.', image: '/images/Screenshot 2026-06-15 110911.png', alt: 'Screenshot from an interactive project' },
    { eyebrow: '03 / Direction', title: 'Useful is a design decision.', text: 'I’m building toward my own ventures. What matters to me is making digital experiences that support people, communicate clearly, and feel considered. I debug from first principles, listen to feedback, and use each project to sharpen the next one.', image: '/images/Screenshot 2026-07-06 093822.png', alt: 'Screenshot from a collaborative prototype project' }
];

export default function AboutPage() {
    const sectionRefs = useRef([]);
    useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting)), { threshold: 0.18 }); sectionRefs.current.forEach((section) => section && observer.observe(section)); return () => observer.disconnect(); }, []);
    return <><section className="page-intro section-purple"><p className="eyebrow">About me</p><h1>A developer with a practical imagination.</h1><p>I’m interested in the space where a clear idea becomes something people can actually use.</p></section><section className="story-sections">{sections.map((section, index) => <article className={`story-section${index % 2 ? ' image-first' : ''}`} key={section.eyebrow} ref={(element) => { sectionRefs.current[index] = element; }}><div className="story-copy"><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2><p>{section.text}</p></div><figure><img src={section.image} alt={section.alt} loading="lazy" /></figure></article>)}</section><section className="about-cta"><h2>Curious about what I’m building?</h2><Link to="/skills" className="btn">Explore my skills <Icon name="arrow" /></Link></section><NextPage to="/skills" label="Skills" /></>;
}
