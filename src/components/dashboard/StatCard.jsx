import { Icon } from "../ui/Icon.jsx";

export function StatCard({ value, label, icon, tone }) {
  return (
    <article className="summary-card">
      <div className={`summary-icon summary-icon--${tone}`}>
        <Icon name={icon} />
      </div>
      <div className="summary-copy">
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </article>
  );
}
