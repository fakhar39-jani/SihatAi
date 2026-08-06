import { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { Card } from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.displayName || "Guest User",
    email: user?.email || "guest@medguide.ai",
    phone: "",
    age: "",
  });

  const initials = form.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div className="max-w-3xl space-y-6">
      <Card>
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-2)] text-2xl font-bold text-[#0B0B0B]">
            {initials}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white">{form.name}</h2>
            <p className="text-sm text-[var(--color-text-muted)]">{form.email}</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => setEditing((v) => !v)}>
            <HiOutlinePencil size={14} />
            {editing ? "Cancel" : "Edit Profile"}
          </Button>
        </div>
      </Card>

      <Card>
        <h3 className="text-sm font-semibold text-white mb-5">Personal Information</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <Input
            id="name"
            label="Full name"
            value={form.name}
            disabled={!editing}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input id="email" label="Email" value={form.email} disabled />
          <Input
            id="phone"
            label="Phone number"
            placeholder="+92 3XX XXXXXXX"
            value={form.phone}
            disabled={!editing}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <Input
            id="age"
            label="Age"
            type="number"
            value={form.age}
            disabled={!editing}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />
        </div>
        {editing && (
          <div className="mt-6 flex justify-end">
            <Button size="sm" onClick={() => setEditing(false)}>
              Save Changes
            </Button>
          </div>
        )}
      </Card>

      <Card>
        <h3 className="text-sm font-semibold text-white mb-4">Medical History</h3>
        <div className="space-y-3">
          {[
            { label: "Allergies", value: "None reported" },
            { label: "Chronic conditions", value: "None reported" },
            { label: "Current medications", value: "Vitamin D3, Cetirizine" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-3"
            >
              <span className="text-sm text-[var(--color-text-muted)]">{item.label}</span>
              <span className="text-sm text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
