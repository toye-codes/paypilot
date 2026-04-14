
export default function InviteMemberModal({ open, onClose }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Invite Team Member</h2>

        <div className="flex flex-col gap-4">
          <input className="input" placeholder="Full Name" />
          <input className="input" placeholder="Email Address" />

          <select className="input">
            <option value="admin">Admin</option>
            <option value="operator">Operator</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg bg-black text-white">
            Send Invite
          </button>
        </div>
      </div>
    </div>
  );
}
