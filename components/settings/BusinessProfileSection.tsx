"use client";

import { useState } from "react";
import SectionHeader from "@/components/global/SectionHeader";
import EditProfileModal from "./modals/EditProfileModal";

export default function BusinessProfileSection() {
  const [open, setOpen] = useState(false);

  // Temporary static data (replace with API later)
  const businessProfile = {
    name: "Acme Electronics",
    owner: "Jane Doe",
    email: "admin@acme.ng",
    phone: "+234 801 234 5678",
  };

  const fields = [
    { label: "Business Name", value: businessProfile.name },
    { label: "Owner Name", value: businessProfile.owner },
    { label: "Email Address", value: businessProfile.email },
    { label: "Phone Number", value: businessProfile.phone },
  ];

  return (
    <>
      <section
        className="rounded-2xl p-5 md:p-6 border"
        style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
        <SectionHeader
          title="Business Profile"
          subtitle="Your verified business identity"
          action={
            <button
              onClick={() => setOpen(true)}
              className="text-sm px-3 py-1.5 rounded-lg shadow-xs hover:bg-gray-50"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}>
              Edit Profile
            </button>
          }
        />

        <p className="text-xs mt-2" style={{ color: "var(--text-secondary)" }}>
          Only the business owner can update these details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          {fields.map((field, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <label
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: "var(--text-muted)" }}>
                {field.label}
              </label>
              <input
                type="text"
                value={field.value}
                readOnly
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border bg-gray-50 outline-none"
              />
            </div>
          ))}
        </div>
      </section>

      <EditProfileModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
