import Link from "next/link";
import { TrendingUp, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "var(--content-bg)" }}>
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
            style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
            <TrendingUp size={20} className="text-white" />
          </div>
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

            <button type="button" className="w-full py-3 mt-2 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 shadow-md"
              style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 flex justify-center">
            <Link href="/auth/login" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-gray-900"
              style={{ color: "var(--text-secondary)" }}>
              <ArrowLeft size={16} />
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
