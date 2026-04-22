import { Badge } from "../ui/Badge.jsx";
import { Icon } from "../ui/Icon.jsx";

export function CourseCard({ course, highlighted = false }) {
  return (
    <article className={`course-card${highlighted ? " is-highlighted" : ""}`}>
      <img src={course.image} alt="" className="course-card__image" style={course.imageStyle} />
      <div className="course-card__body">
        <div className="course-card__copy">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
        <div className="course-card__meta">
          <span>
            <Icon name="files" />
            {course.sessions}
          </span>
          <span className="course-card__separator">
            <Icon name="dot" className="icon--dot" />
          </span>
          <span>
            <Icon name="clock" />
            {course.duration}
          </span>
        </div>
        <div className="course-card__footer">
          <div className="course-tags">
            <Badge tone="blue">In progress</Badge>
            <Badge tone="red" />
            <Badge tone="green" />
          </div>
          <div className="progress-cluster">
            <div className="progress-rail">
              <span style={{ width: `${course.progress}%` }} />
            </div>
            <span className="progress-copy">{course.progress}% completed</span>
          </div>
        </div>
      </div>
    </article>
  );
}
