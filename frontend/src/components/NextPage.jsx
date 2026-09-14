import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function NextPage({ to, label, description }) {
    return <div className="next-page">{description && <p>{description}</p>}<Link to={to}>Next: {label}<Icon name="arrow" /></Link></div>;
}
