export function Tabs({ tabs, activeTab, onChange, className = "" }) {
  return (
    <div className={`tabs ${className}`.trim()} role="tablist" aria-label="Course filters">
      {tabs.map((tab) => (
        <button
          key={tab.id || tab.label}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          className={`tabs__item${activeTab === tab.id ? " is-active" : ""}`}
          onClick={() => onChange?.(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
