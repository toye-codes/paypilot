"use client";

import { useState } from "react";
import SectionHeader from "@/components/global/SectionHeader";
import InviteMemberModal from "./modals/InviteMemberModal";

type Role = "super_admin" | "admin" | "operator";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export default function TeamAccessSection() {
  const [open, setOpen] = useState(false);

  const members: TeamMember[] = [
    {
      id: "1",
      name: "Jane Doe",
      email: "admin@acme.ng",
      role: "super_admin",
    },
    {
      id: "2",
      name: "Mark Attah",
      email: "mark@acme.ng",
      role: "operator",
    },
  ];

  const roleStyles: Record<Role, { label: string; className: string }> = {
    super_admin: {
      label: "Owner",
      className: "bg-blue-100 text-blue-700",
    },
    admin: {
      label: "Admin",
      className: "bg-blue-100 text-blue-700",
    },
    operator: {
      label: "Operator",
      className: "bg-yellow-100 text-yellow-700",
    },
  };

  return (
    <>
      <section className="rounded-2xl p-5 md:p-6 bg-white">
        <SectionHeader
          title="Team Access"
          subtitle="Manage who has access to your dashboard"
          action={
            <button
              onClick={() => setOpen(true)}
              className="text-sm px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50">
              Invite Member
            </button>
          }
        />

        <div className="flex flex-col mt-4">
          {members.map((member, index) => {
            const role = roleStyles[member.role];

            return (
              <div
                key={member.id}
                className={`flex items-center justify-between py-3 ${
                  index !== members.length - 1 ? "border-b border-border" : ""
                }`}>
                {/* Left */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold text-white ${
                      member.role === "admin" || member.role === "super_admin"
                        ? "bg-linear-to-br from-blue-500 to-purple-500"
                        : "bg-green-500"
                    }`}>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-primary">
                      {member.name}
                    </p>
                    <p className="text-xs text-muted">{member.email}</p>
                  </div>
                </div>

                {/* Right */}
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${role.className}`}>
                  {role.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <InviteMemberModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
