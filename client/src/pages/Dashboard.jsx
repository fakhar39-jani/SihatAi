import { HiOutlineHeart, HiOutlineCalendar, HiOutlineFire } from "react-icons/hi";
import { useAuth } from "../context/AuthContext";
import HealthScoreChart from "../components/dashboard/HealthScoreChart";
import StatCard from "../components/dashboard/StatCard";
import RecentConversations from "../components/dashboard/RecentConversations";
import MedicinePlanner from "../components/dashboard/MedicinePlanner";

export default function Dashboard() {
  const { user } = useAuth();
  const firstName = user?.displayName?.split(" ")[0] || "there";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Welcome back, {firstName} 👋</h2>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          Here's a snapshot of your health today.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        <StatCard icon={HiOutlineHeart} label="Health Score" value="86" hint="Up 8% from last week" />
        <StatCard icon={HiOutlineCalendar} label="Next Appointment" value="Aug 12" hint="Dr. Ahmed — General Checkup" />
        <StatCard icon={HiOutlineFire} label="Check-in Streak" value="12 days" hint="Keep it going!" />
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <HealthScoreChart />
        <MedicinePlanner />
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <RecentConversations />
      </div>
    </div>
  );
}
