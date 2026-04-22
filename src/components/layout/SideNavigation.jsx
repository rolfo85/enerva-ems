import { assets, navGroups } from "../../data/dashboard.js";
import { Icon } from "../ui/Icon.jsx";

function SearchField() {
  return (
    <label className="search-field">
      <Icon name="search" />
      <input type="search" placeholder="Search..." />
    </label>
  );
}

function NavItem({ item, currentPage, onNavigate }) {
  const isActive = currentPage === item.page;

  return (
    <button
      className={`nav-item${isActive ? " is-active" : ""}`}
      type="button"
      onClick={() => item.page && onNavigate(item.page)}
    >
      <Icon name={item.icon} />
      <span>{item.label}</span>
    </button>
  );
}

export function SideNavigation({ currentPage, onNavigate }) {
  return (
    <aside className="side-nav">
      <div className="brand-lockup">
        <img src={assets.brandLogo} alt="Enerva EMS" className="brand-logo-image" />
      </div>
      <SearchField />
      <div className="nav-stack">
        {navGroups.map((group) => (
          <section className="nav-group" key={group.title || "main"}>
            {group.title ? <p className="nav-group__title">{group.title}</p> : null}
            <div className="nav-items">
              {group.items.map((item) => (
                <NavItem item={item} currentPage={currentPage} onNavigate={onNavigate} key={item.label} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <button className="settings-link" type="button">
        <Icon name="gear" />
        <span>Settings</span>
      </button>
    </aside>
  );
}
