import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png"


const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--content-bg)]">
      <div className="w-full max-w-md">
        {/* Logo */}
        {/* Logo */}
        <div className="flex flex-col items-center space-y-2 ">
          <Image src={logo} alt="PayPilot" className="w-10 h-10" />
          <h2 className="text-xl font-semibold">PayPilot</h2>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-8 bg-(--card-bg) border border-(--border) shadow-md">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-xl font-semibold text-(--text-primary)">
              Create an account
            </h1>
            <p className="text-sm mt-1 text-(--text-secondary)">
              Start managing your finances with PayPilot
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4">
            {/* Business Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-(--text-muted)">
                Business Name
              </label>
              <input
                type="text"
                placeholder="e.g. Acme Electronics"
                className="w-full px-4 py-3 rounded-xl text-sm border border-(--border) outline-none focus:ring-2 focus:ring-(--primary) bg-(--primary-soft)"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-(--text-muted)">
                Email
              </label>
              <input
                type="email"
                placeholder="admin@acme.ng"
                className="w-full px-4 py-3 rounded-xl text-sm border border-(--border) outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--primary-soft)]"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full px-4 py-3 rounded-xl text-sm border border-(--border) outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--primary-soft)]"
              />
            </div>

            {/* Button */}
            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition">
              Create an Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm mt-6 text-(--text-secondary)">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold text-(--primary) hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;