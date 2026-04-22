import { Badge } from "../ui/Badge.jsx";
import { Icon } from "../ui/Icon.jsx";

export function LearningCourseRow({ course }) {
  return (
    <article className={`learning-course-row${course.highlighted ? " is-highlighted" : ""}`}>
      <img src={course.image} alt="" className="learning-course-row__image" style={course.imageStyle} />
      <div className="learning-course-row__body">
        <div className="learning-course-row__copy">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
        <div className="learning-course-row__meta">
          <span>
            <Icon name="files" />
            {course.sessions}
          </span>
          <span className="learning-course-row__separator">
            <Icon name="dot" className="icon--dot" />
          </span>
          <span>
            <Icon name="clock" />
            {course.duration}
          </span>
        </div>
        <div className="learning-course-row__footer">
          <div className="learning-course-row__tags">
            <Badge tone={course.status.tone}>{course.status.label}</Badge>
            {course.tags.map((tone) => (
              <Badge key={tone} tone={tone} />
            ))}
          </div>
          {course.progress ? (
            <div className="learning-course-row__progress">
              <div className="learning-course-row__progress-rail">
                <span style={{ width: `${course.progress}%` }} />
              </div>
              <span className="learning-course-row__progress-copy">{course.progress}% completed</span>
            </div>
          ) : null}
          {course.action ? <button className="learning-course-row__link">{course.action}</button> : null}
        </div>
      </div>
    </article>
  );
}
