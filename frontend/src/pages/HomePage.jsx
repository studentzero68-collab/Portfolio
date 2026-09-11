import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import NextPage from '../components/NextPage';

const highlights = [
    ['01', 'Build', 'Turning ideas into responsive, working interfaces.'],
    ['02', 'Learn', 'Growing from frontend craft into full-stack thinking.'],
    ['03', 'Finish', 'Debugging from first principles and shipping the result.']
];

export default function HomePage() {
    return <>
        <section className="home-hero section-light">
            <div className="home-hero-copy"><p className="eyebrow">Full-Stack Web Developer in Training</p><h1>Mukelani<br /><em>builds with intent.</em></h1><p className="hero-lede">I create thoughtful web experiences while learning the systems behind them. From responsive interfaces to APIs and real data, I’m building a practical foundation one project at a time.</p><div className="hero-actions"><Link to="/projects" className="btn">View my work <Icon name="arrow" /></Link><Link to="/about" className="text-link">More about me <Icon name="arrow" /></Link></div></div>
            <div className="home-hero-visual"><div className="portrait-frame"><img src="/images/ChatGPT Image Jul 15, 2026, 02_55_11 PM.png" alt="Mukelani Nkazimulo Sindana" /></div><div className="hero-note"><span>Currently</span><strong>learning in Gauteng, South Africa</strong></div></div>
        </section>
        <section className="intro-strip"><div className="section-kicker">The work behind the work</div><div className="highlight-grid">{highlights.map(([number, title, text]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>
        <section className="home-cta"><p className="eyebrow">A growing body of work</p><h2>Small steps. Real interfaces. Better questions.</h2><Link to="/projects" className="btn btn-dark">Explore the projects <Icon name="arrow" /></Link></section>
        <NextPage to="/about" label="About" />
    </>;
}
