export default function PageHero({ eyebrow, title, children }) {
    return <section className="page-hero"><div className="page-hero-content"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p className="page-hero-text">{children}</p></div></section>;
}