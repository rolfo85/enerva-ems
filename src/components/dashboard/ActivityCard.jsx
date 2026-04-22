import { activityBars } from "../../data/dashboard.js";

export function ActivityCard() {
  return (
    <section className="panel activity-panel">
      <h2>Activity</h2>
      <div className="activity-chart">
        {activityBars.map((bar) => (
          <div className="activity-bar" key={bar.day}>
            <div className="activity-tooltip" aria-hidden="true">
              <strong>{bar.duration}</strong>
              <span>{bar.date}</span>
              <span className="activity-tooltip__arrow" aria-hidden="true" />
            </div>
            <span className="activity-bar__track" style={{ height: `${bar.height}px` }} />
          </div>
        ))}
      </div>
      <div className="activity-days">
        {activityBars.map((bar) => (
          <span className="activity-bar__label" key={bar.day}>
            {bar.day}
          </span>
        ))}
      </div>
    </section>
  );
}
