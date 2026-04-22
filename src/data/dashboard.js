export const assets = {
  newsImage: "/assets/news-image.png",
  avatarImage: "/assets/avatar-image.png",
  brandLogo: "/assets/enerva-logo.png",
};

export const educationImages = [
  "https://images.unsplash.com/photo-1752564291723-bb816a3dfb33?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudCUyMGluJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=600",
  "https://images.unsplash.com/photo-1758270704524-596810e891b5?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZGVudCUyMGluJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=600",
  "https://images.unsplash.com/photo-1770235622881-7c3b96af6972?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0dWRlbnQlMjBpbiUyMGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=600",
];

export const summaryCards = [
  { value: "3", label: "Total courses im progres", icon: "crosshair", tone: "blue" },
  { value: "12", label: "Certificates earned", icon: "trophy", tone: "red" },
  { value: "8h 12m", label: "Learning time", icon: "clock", tone: "purple" },
  { value: "12", label: "Completed course", icon: "target", tone: "green" },
];

export const courseCards = [
  {
    image: educationImages[0],
    title: "Semi Program: How to Use and Save Money",
    description:
      "Discover how to use the Semi program effectively to cut costs in your projects.",
    sessions: "62 sessions",
    duration: "Total duration: 3h 4m",
    progress: 45,
  },
  {
    image: educationImages[1],
    title: "Semi Program: How to Use and Save Money",
    description:
      "Discover how to use the Semi program effectively to cut costs in your projects.",
    sessions: "62 sessions",
    duration: "Total duration: 3h 4m",
    progress: 45,
  },
  {
    image: educationImages[2],
    title: "Semi Program: How to Use and Save Money",
    description:
      "Discover how to use the Semi program effectively to cut costs in your projects.",
    sessions: "62 sessions",
    duration: "Total duration: 3h 4m",
    progress: 45,
  },
];

export const activityBars = [
  { day: "Mon", height: 75, date: "May 8, 2026", duration: "2h 58m" },
  { day: "Tue", height: 65, date: "May 9, 2026", duration: "2h 14m" },
  { day: "Wed", height: 80, date: "May 10, 2026", duration: "3h 24m" },
  { day: "Thu", height: 75, date: "May 11, 2026", duration: "2h 49m" },
  { day: "Fri", height: 43, date: "May 12, 2026", duration: "1h 36m" },
  { day: "Sat", height: 33, date: "May 13, 2026", duration: "1h 08m" },
  { day: "Sun", height: 30, date: "May 14, 2026", duration: "54m" },
];

export const navGroups = [
  {
    items: [
      { label: "Home", icon: "grid", page: "home" },
      { label: "My Learning", icon: "star", page: "my-learning" },
      { label: "Courses", icon: "book", page: "courses" },
    ],
  },
  {
    title: "ADMIN",
    items: [
      { label: "Analytic", icon: "pie" },
      { label: "Manage Courses", icon: "briefcase" },
      { label: "Users", icon: "users" },
    ],
  },
];

export const myLearningTabs = [
  { id: "all", label: "Tag 1" },
  { id: "completed", label: "Tab 2" },
  { id: "certificates", label: "Tab 3" },
];

export const myLearningCourses = [
  {
    image: educationImages[0],
    title: "Semi Program: How to Use and Save Money",
    description:
      "Discover how to use the semi program effectively to cut costs in your projects.",
    sessions: "62 sessions",
    duration: "Total duration: 3h 4m",
    status: { label: "In progress", tone: "blue" },
    tags: ["red", "green"],
    progress: 45,
  },
  {
    image: educationImages[1],
    title: "Semi Program: How to Use and Save Money",
    description:
      "Discover how to use the semi program effectively to cut costs in your projects.",
    sessions: "62 sessions",
    duration: "Total duration: 3h 4m",
    status: { label: "Completed", tone: "teal" },
    tags: ["red"],
    highlighted: true,
  },
  {
    image: educationImages[2],
    title: "Semi Program: How to Use and Save Money",
    description:
      "Discover how to use the semi program effectively to cut costs in your projects.",
    sessions: "62 sessions",
    duration: "Total duration: 3h 4m",
    status: { label: "In progress", tone: "blue" },
    tags: ["red", "green"],
    action: "View Certificate",
  },
];

export const coursesTabs = [
  { id: "all", label: "All Courses" },
  { id: "popular", label: "Popular" },
  { id: "new", label: "New" },
];

export const courseTypeOptions = [
  { value: "all", label: "All Types" },
  { value: "interactive", label: "Interactive" },
  { value: "webinar", label: "Webinar" },
];

export const courseStatusOptions = [
  { value: "all", label: "All Status" },
  { value: "free", label: "Free" },
  { value: "paid", label: "Paid" },
];

export const coursesCatalog = [
  {
    image: educationImages[0],
    title: "Semi Program: How to Use and Save Money",
    description: "Discover how to use the semi program effectively to cut costs in your projects.",
    sessions: "12 sessions",
    duration: "Total duration: 3h 4m",
    badges: [
      { label: "Interactive", tone: "blue" },
      { label: "", tone: "green" },
    ],
    ctaLabel: "Buy $8.99",
    ctaVariant: "primary",
    category: "popular",
    type: "interactive",
    status: "paid",
  },
  {
    image: educationImages[1],
    title: "Electrical Safety Essentials for Field Teams",
    description: "A practical walkthrough for staying compliant and reducing risk during daily site work.",
    sessions: "8 sessions",
    duration: "Total duration: 2h 20m",
    badges: [
      { label: "Interactive", tone: "blue" },
      { label: "", tone: "green" },
    ],
    ctaLabel: "Buy $8.99",
    ctaVariant: "primary",
    category: "popular",
    type: "interactive",
    status: "paid",
  },
  {
    image: educationImages[2],
    title: "Hydronic Systems Setup and Commissioning",
    description: "Learn the full installation flow, startup checks, and the common faults to avoid.",
    sessions: "10 sessions",
    duration: "Total duration: 4h 10m",
    badges: [
      { label: "Interactive", tone: "blue" },
      { label: "", tone: "green" },
    ],
    ctaLabel: "Start Free",
    ctaVariant: "danger",
    category: "new",
    type: "interactive",
    status: "free",
  },
  {
    image: educationImages[0],
    title: "Boiler Room Fundamentals",
    description: "A starter course on equipment identification, maintenance routines, and core troubleshooting.",
    sessions: "9 sessions",
    duration: "Total duration: 2h 48m",
    badges: [
      { label: "Webinar", tone: "red" },
      { label: "", tone: "green" },
    ],
    ctaLabel: "Buy $8.99",
    ctaVariant: "primary",
    category: "popular",
    type: "webinar",
    status: "paid",
  },
  {
    image: educationImages[1],
    title: "Mechanical Room Best Practices",
    description: "Understand layout planning, equipment access, and service-safe workflows for technicians.",
    sessions: "11 sessions",
    duration: "Total duration: 3h 32m",
    badges: [
      { label: "Interactive", tone: "blue" },
      { label: "", tone: "green" },
    ],
    ctaLabel: "Buy $8.99",
    ctaVariant: "primary",
    category: "all",
    type: "interactive",
    status: "paid",
  },
  {
    image: educationImages[2],
    title: "Smart Thermostat Installation Workshop",
    description: "Set up connected controls faster, reduce callbacks, and deliver cleaner handoffs to clients.",
    sessions: "6 sessions",
    duration: "Total duration: 1h 54m",
    badges: [
      { label: "Interactive", tone: "blue" },
      { label: "", tone: "green" },
    ],
    ctaLabel: "Start Free",
    ctaVariant: "danger",
    category: "new",
    type: "interactive",
    status: "free",
  },
  {
    image: educationImages[0],
    title: "Advanced HVAC Diagnostics",
    description: "Sharpen your troubleshooting process with case studies focused on fast isolation and repair.",
    sessions: "14 sessions",
    duration: "Total duration: 5h 02m",
    badges: [
      { label: "Interactive", tone: "blue" },
      { label: "", tone: "green" },
    ],
    ctaLabel: "Buy $8.99",
    ctaVariant: "primary",
    category: "popular",
    type: "interactive",
    status: "paid",
  },
  {
    image: educationImages[1],
    title: "Customer Walkthrough and Handover Webinar",
    description: "Improve closeout meetings with clearer explanations, expectations, and support steps.",
    sessions: "5 sessions",
    duration: "Total duration: 1h 15m",
    badges: [
      { label: "Webinar", tone: "red" },
      { label: "", tone: "green" },
    ],
    ctaLabel: "Start Free",
    ctaVariant: "danger",
    category: "new",
    type: "webinar",
    status: "free",
  },
];
