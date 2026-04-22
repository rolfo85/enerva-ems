import { useMemo, useState } from "react";
import { LearningCourseRow } from "../components/dashboard/LearningCourseRow.jsx";
import { PageHero, SearchField, Tabs } from "../components/ui/index.js";
import { myLearningCourses, myLearningTabs } from "../data/dashboard.js";

export function MyLearningPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = useMemo(() => {
    let courses = myLearningCourses;

    if (activeTab === "completed") {
      courses = courses.filter((course) => course.status.label === "Completed");
    } else if (activeTab === "certificates") {
      courses = courses.filter((course) => Boolean(course.action));
    }

    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return courses;
    }

    return courses.filter((course) =>
      [course.title, course.description, course.sessions, course.duration, course.status.label]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [activeTab, searchTerm]);

  return (
    <>
      <PageHero title="My Learning" subtitle="Track your enrolled courses and progress" />
      <section className="panel my-learning-panel" aria-label="My Learning page">
        <div className="my-learning-panel__toolbar">
          <SearchField
            className="my-learning-panel__search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <Tabs
            tabs={myLearningTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
            className="my-learning-panel__tabs"
          />
        </div>
        <div className="my-learning-panel__list">
          {filteredCourses.map((course, index) => (
            <LearningCourseRow course={course} key={`${course.title}-${index}`} />
          ))}
        </div>
      </section>
    </>
  );
}
