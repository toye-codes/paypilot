"use client";

import { useEditProfile } from "../../hooks/useEditPrrofile";
export default function EditProfileModal({ open, onClose }: any) {
  const { form, handleChange, handleSubmit, handleClose } = useEditProfile(onClose);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Edit Business Profile</h2>

        <div className="grid gap-4">
          <input
            className="py-2 px-2 rounded-xl"
            placeholder="Business Name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <input
            className=" py-2 px-2 rounded-xl"
            placeholder="Owner Name"
            value={form.owner}
            onChange={(e) => handleChange("owner", e.target.value)}
          />

          <input
            className=" py-2 px-2 rounded-xl"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <input
            className=" py-2 px-2 rounded-xl"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={handleClose} className="px-4 py-2 rounded-lg border">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-black text-white">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
