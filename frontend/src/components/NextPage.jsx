import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function NextPage({ to, label }) {
    return <div className="next-page"><Link to={to}>Next: {label}<Icon name="arrow" /></Link></div>;
}
