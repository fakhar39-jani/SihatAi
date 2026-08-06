import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const TITLES = {
  "/dashboard": "Overview",
  "/dashboard/appointments": "Appointments",
  "/dashboard/history": "Health History",
  "/chat": "AI Health Chat",
  "/symptom-checker": "Symptom Checker",
  "/profile": "Profile",
  "/settings": "Settings",
};

export default function DashboardLayout() {
  const { pathname } = useLocation();
  const title = TITLES[pathname] || "Dashboard";

  return (
    <div className="flex min-h-screen bg-[var(--color-bg)]">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <Topbar title={title} />
        <main className="px-6 lg:px-8 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
