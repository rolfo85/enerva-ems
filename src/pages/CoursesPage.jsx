import { useMemo, useState } from "react";
import { CourseCatalogCard } from "../components/dashboard/CourseCatalogCard.jsx";
import { PageHero, SearchField, SelectField, Tabs } from "../components/ui/index.js";
import {
  courseStatusOptions,
  courseTypeOptions,
  coursesCatalog,
  coursesTabs,
} from "../data/dashboard.js";

export function CoursesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredCourses = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return coursesCatalog.filter((course) => {
      if (activeTab !== "all" && course.category !== activeTab) {
        return false;
      }

      if (typeFilter !== "all" && course.type !== typeFilter) {
        return false;
      }

      if (statusFilter !== "all" && course.status !== statusFilter) {
        return false;
      }

      if (!query) {
        return true;
      }

      return [course.title, course.description, course.sessions, course.duration, ...course.badges.map((badge) => badge.label)]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [activeTab, searchTerm, statusFilter, typeFilter]);

  return (
    <>
      <PageHero title="Courses" subtitle="Browse and explore all available courses" />
      <section className="panel courses-panel" aria-label="Courses page">
        <div className="courses-panel__toolbar">
          <Tabs tabs={coursesTabs} activeTab={activeTab} onChange={setActiveTab} className="courses-panel__tabs" />
          <div className="courses-panel__filters">
            <SearchField
              className="courses-panel__search"
              placeholder="Search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <SelectField
              className="courses-panel__select"
              options={courseTypeOptions}
              value={typeFilter}
              onChange={(event) => setTypeFilter(event.target.value)}
              ariaLabel="Filter courses by type"
            />
            <SelectField
              className="courses-panel__select"
              options={courseStatusOptions}
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              ariaLabel="Filter courses by status"
            />
          </div>
        </div>
        <div className="courses-panel__grid">
          {filteredCourses.map((course, index) => (
            <CourseCatalogCard key={`${course.title}-${index}`} course={course} />
          ))}
        </div>
      </section>
    </>
  );
}
