import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

import logo from "@/public/logo.png";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "var(--content-bg)" }}>
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
            <Image src={logo} alt="PayPilot" className="w-12 h-12" />
        </div>

        <div className="rounded-2xl p-8"
          style={{ background: "var(--card-bg)", border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Reset your password</h1>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
              Enter your email and we'll send you instructions to reset your password.
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Email address</label>
              <input type="email" placeholder="admin@acme.ng"
                className="w-full px-4 py-3 rounded-xl text-sm border outline-none focus:ring-2 transition-all bg-gray-50" />
            </div>

            <button type="button"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 flex justify-center">
            <Link href="/login" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-gray-900">
              <ArrowLeft size={16} />
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
