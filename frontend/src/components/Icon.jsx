const glyphs = {
    arrow: '->',
    external: '↗',
    github: 'GH',
    mail: '@',
    code: '</>',
    layers: '◈',
    spark: '✦',
    check: '✓'
};

export default function Icon({ name, label }) {
    return <span className={`icon icon-${name}`} aria-hidden={label ? undefined : 'true'} title={label}>{glyphs[name] || glyphs.spark}</span>;
}
