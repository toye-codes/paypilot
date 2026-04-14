"use client";

import SectionHeader from "@/shared/components/global/SectionHeader";
import { useAccountSecurity } from "../hooks/useAccountSecurity";

export default function AccountSecuritySection() {
  const { open, form, toggle, handleChange, handleSubmit, handleClose } = useAccountSecurity();

  return (
    <section className="rounded-2xl p-5 md:p-6 bg-white">
      <SectionHeader
        title="Account Security"
        subtitle="Update your password and manage sessions"
      />

      {/* Actions */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={toggle}
          className="px-4 py-2.5 rounded-xl shadow-xs hover:bg-gray-50">
          Change Password
        </button>

        <button className="px-4 py-2.5 rounded-xl border border-red-200 bg-red-50/50 text-red-600 hover:bg-red-50">
          Sign Out Everywhere
        </button>
      </div>

      {/* Form */}
      {open && (
        <div className="mt-5 pt-5">
          <div className="grid gap-4 max-w-md">
            {/* Current */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-sm text-muted">
                Current Password
              </label>
              <input
                type="password"
                value={form.currentPassword}
                onChange={(e) =>
                  handleChange("currentPassword", e.target.value)
                }
                className="py-2 px-2 rounded-xl"
                placeholder="Enter current password"
              />
            </div>

            {/* New */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-sm text-muted">
                New Password
              </label>
              <input
                type="password"
                value={form.newPassword}
                onChange={(e) => handleChange("newPassword", e.target.value)}
            className="py-2 px-2 rounded-xl"
                placeholder="Enter new password"
              />
            </div>

            {/* Confirm */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-sm text-muted">
                Confirm Password
              </label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={(e) =>
                  handleChange("confirmPassword", e.target.value)
                }
            className="py-2 px-2 rounded-xl"
                placeholder="Confirm new password"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleSubmit}
                className="px-4 py-2.5 rounded-xl bg-black text-white text-sm hover:opacity-90">
                Update Password
              </button>

              <button
                onClick={handleClose}
                className="px-4 py-2.5 rounded-xl border border-border text-sm hover:bg-gray-50">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
