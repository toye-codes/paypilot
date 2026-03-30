"use client";

import { useState } from "react";
import Sidebar from "@/components/global/Sidebar";
import RightPanel from "@/components/dashboard/RightPanel";
import { Menu } from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="h-screen overflow-hidden">
      {/* Topbar (mobile only) */}
      <div className=" bg-white shadow-md mb-8 flex items-center justify-between p-4 lg:hidden">
        <button onClick={() => setOpen(true)}>
          <Menu />
        </button>
        <span className="font-semibold">Dashboard</span>
      </div>

      {/* Main Layout */}
      <div className="grid h-full grid-cols-1 lg:grid-cols-[220px_1fr_300px]">
        {/* Sidebar (Desktop) */}
        <aside className="hidden lg:block h-full overflow-y-auto">
          <Sidebar />
        </aside>

        {/* Sidebar (Mobile Overlay) */}
        {open && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setOpen(false)}
            />
            <aside className="fixed top-0 left-0 h-full w-[240px] bg-white z-50 shadow-lg">
              <Sidebar />
            </aside>
          </>
        )}

        {/* Main Content */}
        <main className="h-full overflow-y-auto p- md:p-4">{children}</main>

        {/* Right Panel */}
        <aside className=" h-full overflow-y-auto p-2 hidden lg:block">
          <RightPanel />
        </aside>
      </div>
    </section>
  );
}
