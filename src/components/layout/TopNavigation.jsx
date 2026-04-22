import { assets } from "../../data/dashboard.js";
import { Icon } from "../ui/Icon.jsx";

export function TopNavigation() {
  return (
    <header className="top-nav">
      <div className="top-nav__spacer" />
      <div className="top-nav__actions">
        <button className="icon-button" type="button" aria-label="Notifications">
          <Icon name="bell" />
        </button>
        <button className="icon-button" type="button" aria-label="Settings">
          <Icon name="gear" />
        </button>
        <div className="user-card">
          <img src={assets.avatarImage} alt="Mark John" className="user-card__avatar" />
          <div className="user-card__copy">
            <strong>Mark John</strong>
            <span>mark@email.com</span>
          </div>
        </div>
      </div>
    </header>
  );
}
