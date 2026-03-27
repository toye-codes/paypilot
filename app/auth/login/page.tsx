import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import InputField from "@/components/auth/InputField";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-2 ">
          <Image src={logo} alt="PayPilot" className="w-10 h-10" />
          <h2 className="text-xl font-semibold">PayPilot</h2>
        </div>

        {/* Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm space-y-6">
          {/* Header */}
          <div className="space-y-1 text-center mt-10">
            <h1 className="text-2xl font-semibold">Welcome back</h1>
            <p className="text-sm text-gray-500">
              Sign in to your PayPilot dashboard
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <InputField
              label="Email"
              type="email"
              placeholder="admin@acme.ng"
            />

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label className="font-medium">Password</label>
                <Link
                  href="/auth/forgot-password"
                  className="text-blue-600 hover:underline">
                  Forgot?
                </Link>
              </div>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition">
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-center text-gray-500 mt-10">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-blue-600 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
