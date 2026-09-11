import { useState } from 'react';
import NextPage from '../components/NextPage';
import Icon from '../components/Icon';

const contacts = [['Email', 'mailto:studentzero68@gmail.com', 'mail'], ['GitHub', 'https://github.com/studentzero68-collab', 'github'], ['WhatsApp', 'https://wa.me/27725394588', 'spark']];

export default function ContactPage() {
    const [sent, setSent] = useState(false);
    function submit(event) { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`); const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`); window.location.href = `mailto:studentzero68@gmail.com?subject=${subject}&body=${body}`; setSent(true); }
    return <><section className="page-intro section-light contact-intro"><p className="eyebrow">Contact</p><h1>Have a thoughtful idea? Start here.</h1><p>For opportunities, collaborations, or a conversation about building something useful.</p></section><section className="contact-section"><div className="contact-form-wrap"><span className="section-kicker">Send a message</span><h2>The simple version works.</h2><form className="contact-form" onSubmit={submit}><label htmlFor="name">Name</label><input id="name" name="name" required /><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /><label htmlFor="message">Message</label><textarea id="message" name="message" rows="6" required /><button className="btn" type="submit">Send me a message <Icon name="arrow" /></button>{sent && <p className="form-note" role="status">Your email app should open with the message ready.</p>}</form></div><aside className="contact-links"><span className="section-kicker">Find me elsewhere</span>{contacts.map(([label, href, icon]) => <a href={href} key={label} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"><Icon name={icon} /><span>{label}</span><Icon name="external" /></a>)}</aside></section><NextPage to="/" label="Home" /></>;
}
