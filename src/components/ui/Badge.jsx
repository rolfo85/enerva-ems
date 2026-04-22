export function Badge({ children, tone, className = "" }) {
  return <span className={`tag tag--${tone} ${className}`.trim()}>{children}</span>;
}
