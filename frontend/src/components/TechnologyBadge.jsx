import Icon from './Icon';

export default function TechnologyBadge({ name }) {
    return <span className="technology-badge"><Icon name="code" />{name}</span>;
}
