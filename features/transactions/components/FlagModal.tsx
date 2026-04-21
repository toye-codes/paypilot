"use client";

import { useState } from "react";
import { Transaction } from "@/types";

export type PayloadProps = {
  reason: string;
  description: string;
  transactionId?: string;
  flaggedAt: Date;
};

type FlagModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (payload: PayloadProps) => void;
  transaction: Transaction | null;
};

export default function FlagModal({
  isOpen,
  onClose,
  onSubmit,
  transaction,
}: FlagModalProps) {
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!reason) return;

    // enforce description if "other"
    if (reason === "other" && !description.trim()) return;

    const payload = {
      reason,
      description,
      transactionId: transaction?.id,
      flaggedAt: new Date(),
    };

    onSubmit(payload);

    // reset state AFTER submit
    setReason("");
    setDescription("");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 z-10">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Flag Transaction</h2>
          <p className="text-sm text-gray-500">
            Report an issue with this transaction
          </p>
        </div>

        {/* Transaction Info */}
        {transaction && (
          <div className="mb-4 p-3 rounded-lg bg-gray-50 border text-sm">
            <p className="font-medium">{transaction.description}</p>
            <p className="text-gray-500">
              ₦{transaction.amount?.toLocaleString()} •{" "}
              {new Date(transaction.date).toLocaleDateString()}
            </p>
          </div>
        )}

        {/* Reason */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Reason <span className="text-red-500">*</span>
          </label>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black">
            <option value="">Select a reason</option>
            <option value="incorrect_amount">Incorrect amount</option>
            <option value="duplicate_transaction">Duplicate transaction</option>
            <option value="suspicious_activity">Suspicious activity</option>
            <option value="wrong_account">Wrong account</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Additional Details
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide more context..."
            rows={4}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg border hover:bg-gray-100">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!reason}
            className="px-4 py-2 text-sm rounded-lg bg-black text-white disabled:opacity-50">
            Submit Flag
          </button>
        </div>
      </div>
    </div>
  );
}
