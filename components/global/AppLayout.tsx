import Sidebar from "@/components/global/Sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
  rightPanel?: React.ReactNode;
  threeColumn?: boolean;
}

export default function AppLayout({ children, rightPanel, threeColumn = false }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex" style={{ background: "var(--content-bg)" }}>
      <Sidebar />
      <div className="flex flex-1 ml-60">
        {/* Main Content */}
        <main className={`flex-1 overflow-y-auto min-h-screen ${threeColumn ? "" : "max-w-full"}`}>
          {children}
        </main>

        {/* Right Panel - only on dashboard */}
        {threeColumn && rightPanel && (
          <aside className="w-80 min-h-screen overflow-y-auto border-l flex-shrink-0"
            style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
            {rightPanel}
          </aside>
        )}
      </div>
    </div>
  );
}
