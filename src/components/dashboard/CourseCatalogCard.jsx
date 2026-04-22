import { Badge, Button, Icon } from "../ui/index.js";

export function CourseCatalogCard({ course }) {
  return (
    <article className="catalog-course-card">
      <div className="catalog-course-card__media">
        <img src={course.image} alt="" className="catalog-course-card__image" />
        <div className="catalog-course-card__badges">
          {course.badges.map((badge) => (
            <Badge key={`${course.title}-${badge.label}-${badge.tone}`} tone={badge.tone}>
              {badge.label}
            </Badge>
          ))}
        </div>
      </div>
      <div className="catalog-course-card__body">
        <div className="catalog-course-card__copy">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
        <div className="catalog-course-card__meta">
          <span>
            <Icon name="files" />
            {course.sessions}
          </span>
          <span className="catalog-course-card__separator">
            <Icon name="dot" className="icon--dot" />
          </span>
          <span>
            <Icon name="clock" />
            {course.duration}
          </span>
        </div>
        <div className="catalog-course-card__actions">
          <Button variant={course.ctaVariant} className="catalog-course-card__button">
            {course.ctaLabel}
          </Button>
          <button type="button" className="catalog-course-card__bookmark" aria-label={`Save ${course.title}`}>
            <Icon name="bookmark" />
          </button>
        </div>
      </div>
    </article>
  );
}
