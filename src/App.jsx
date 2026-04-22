import { useState } from "react";
import { CoursesPage } from "./pages/CoursesPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MyLearningPage } from "./pages/MyLearningPage.jsx";
import { SideNavigation } from "./components/layout/SideNavigation.jsx";
import { TopNavigation } from "./components/layout/TopNavigation.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="dashboard-shell">
      <SideNavigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="dashboard-main">
        <TopNavigation />
        <main className="dashboard-content">
          {currentPage === "my-learning" ? <MyLearningPage /> : null}
          {currentPage === "courses" ? <CoursesPage /> : null}
          {currentPage === "home" ? <HomePage /> : null}
        </main>
      </div>
    </div>
  );
}
