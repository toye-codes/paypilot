"use client";

import { useState } from "react";
import Sidebar from "@/components/global/Sidebar";
import RightPanel from "@/components/dashboard/RightPanel";
import { Menu, Bell } from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="h-screen overflow-hidden">
      {/* Topbar (mobile only) */}
      <div className="bg-white shadow-md flex items-center justify-between p-3">
        <button onClick={() => setOpen(true)}>
          <Menu />
        </button>

        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell size={24} />
            {/* Optional: notification dot */}
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full text-white text-xs bg-red-500">1</span>
          </button>

          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium">
            A
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid h-full grid-cols-1 lg:grid-cols-[200px_1fr] pb-16">
        {/* Sidebar (Desktop) */}
        <aside className="hidden lg:block h-full overflow-y-auto">
          <Sidebar />
        </aside>

        {/* Sidebar (Mobile Overlay) */}
        {open && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />
            <aside className="fixed top-0 left-0 h-full w-[240px] z-50">
              <Sidebar />
            </aside>
          </>
        )}

        {/* Main Content */}
        <main className="h-full overflow-y-auto p- md:p-4">{children}</main>

        {/* Right Panel
        <aside className=" h-full overflow-y-auto p-2 hidden lg:block">
          <RightPanel />
        </aside> */}
      </div>
    </section>
  );
}
