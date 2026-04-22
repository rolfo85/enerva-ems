import { ActivityCard } from "../components/dashboard/ActivityCard.jsx";
import { CourseCard } from "../components/dashboard/CourseCard.jsx";
import { NewsCard } from "../components/dashboard/NewsCard.jsx";
import { StatCard } from "../components/dashboard/StatCard.jsx";
import { PageHero } from "../components/ui/PageHero.jsx";
import { courseCards, summaryCards } from "../data/dashboard.js";
import { Icon } from "../components/ui/Icon.jsx";

export function HomePage() {
  return (
    <>
      <PageHero title="Welcome back, Mark" subtitle="Take a look your learning progress for Today May 12, 2026" />
      <section className="content-grid">
        <div className="content-grid__main">
          <section className="panel summary-panel">
            <div className="summary-grid">
              {summaryCards.map((card) => (
                <StatCard key={card.label} {...card} />
              ))}
            </div>
          </section>
          <section className="panel learning-panel">
            <div className="panel-heading">
              <h2>Continue learning</h2>
              <a href="/" onClick={(event) => event.preventDefault()} className="text-link">
                All Courses <Icon name="arrowRight" />
              </a>
            </div>
            <div className="course-list">
              {courseCards.map((course, index) => (
                <CourseCard key={`${course.title}-${index}`} course={course} highlighted={index === 1} />
              ))}
            </div>
          </section>
        </div>
        <div className="content-grid__side">
          <ActivityCard />
          <NewsCard />
        </div>
      </section>
    </>
  );
}
