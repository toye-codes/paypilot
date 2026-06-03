"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ArrowLeftRight,
  Package,
  Settings,
  Bell,
  LogOut,
} from "lucide-react";

import logo from "@/public/logo.png";
import Image from "next/image";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Transactions", href: "/transactions", icon: ArrowLeftRight },
  { label: "Inventory", href: "/inventory", icon: Package },
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className="fixed top-0 left-0 h-screen w-52 flex flex-col z-30"
      style={{ background: "var(--sidebar-bg)" }}>
      {/* Logo */}
      <div className="px-6 py-6 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
          <Image src={logo} alt="PayPilot" />
        </div>
        <span className="text-white font-bold text-lg tracking-tight">
          PayPilot
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 mt-2">
        <p
          className="text-xs font-semibold uppercase tracking-widest px-3 mb-3"
          style={{ color: "var(--sidebar-muted)" }}>
          Main Menu
        </p>
        <ul className="space-y-1">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
                  style={{
                    background: active
                      ? "var(--sidebar-active-bg)"
                      : "transparent",
                    color: active
                      ? "var(--sidebar-active)"
                      : "var(--sidebar-text)",
                  }}>
                  <Icon size={17} />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-6">
        <div
          className="rounded-xl p-3 mb-3"
          style={{ background: "var(--sidebar-surface)" }}>
          <p className="text-xs font-semibold text-white truncate">
            Acme Electronics
          </p>
          <p
            className="text-xs mt-0.5 truncate"
            style={{ color: "var(--sidebar-muted)" }}>
            admin@acme.ng
          </p>
        </div>
        <button
          className="flex items-center gap-2 text-sm w-full px-3 py-2 rounded-xl transition-colors"
          style={{ color: "var(--sidebar-muted)" }}>
          <LogOut size={15} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
