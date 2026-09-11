export default function PageHero({ eyebrow, title, children }) {
    return <section className="page-hero"><div className="page-hero-content"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-hero-text">{children}</p></div></section>;
}