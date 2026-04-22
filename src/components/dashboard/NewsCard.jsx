import { assets } from "../../data/dashboard.js";
import { Badge } from "../ui/Badge.jsx";
import { Button } from "../ui/Button.jsx";
import { Icon } from "../ui/Icon.jsx";

export function NewsCard() {
  return (
    <section className="panel news-panel">
      <div className="panel-heading">
        <h2>News</h2>
        <a href="/" onClick={(event) => event.preventDefault()} className="text-link">
          View All <Icon name="arrowRight" />
        </a>
      </div>
      <div className="news-card__hero">
        <img src={assets.newsImage} alt="" />
        <div className="news-card__badges">
          <Badge tone="red" className="text-red">
            Interactive
          </Badge>
          <Badge tone="green" />
        </div>
      </div>
      <div className="news-card__copy">
        <h3>Innovative Energy Solutions</h3>
        <p>
          This course combines scientific research with real-world applications, drawing on experience in renewable
          energy projects, team leadership, and technology design.
        </p>
      </div>
      <div className="course-card__meta news-card__meta">
        <span>
          <Icon name="grid" />
          12 sessions
        </span>
        <span className="course-card__separator">
          <Icon name="dot" className="icon--dot" />
        </span>
        <span>
          <Icon name="clock" />
          Total duration: 3h 4m
        </span>
      </div>
      <div className="price-row">
        <div className="price-row__main">
          <strong>$8.99</strong>
          <span className="price-row__old">$10.99</span>
        </div>
        <span className="price-row__discount">20% Off</span>
      </div>
      <div className="news-card__actions">
        <Button variant="primary" iconLeft="arrowLeft" iconRight="arrowRight">
          Buy
        </Button>
        <Button variant="secondary" iconLeft="arrowLeft" iconRight="arrowRight">
          Save for later
        </Button>
      </div>
    </section>
  );
}
