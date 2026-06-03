"use client";

import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.png";
import paypilotAuth from "@/public/paypilotAuth.png";

import { useSignup } from "@/features/auth/hooks/useSignup";

const SignupPage = () => {
  const { signupData, handleSignup, handleChange, error } = useSignup();

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black">
        <Image
          src={paypilotAuth}
          alt="PayPilot Dashboard"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-12 text-white">
          <h2 className="text-4xl font-bold max-w-md leading-tight">
            Understand. Control. Protect. Your Money.
          </h2>

          <p className="mt-4 text-white/80 max-w-md">
            Gain visibility into your finances, monitor transactions, and detect
            unusual activity before it becomes a problem.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex flex-col items-center space-y-3 mb-10">
            <Image src={logo} alt="PayPilot" className="w-12 h-12" />

            <h2 className="text-2xl font-semibold">PayPilot</h2>

            <p className="text-sm text-gray-500 text-center">
              Monitor Cashflow. Detect Anomalies. Stay in Control.
            </p>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-black">
              Create an account
            </h1>

            <p className="text-gray-500 mt-2">
              Start managing your finances with PayPilot
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Form */}
          <form className="flex flex-col gap-5" onSubmit={handleSignup}>
            {/* Business Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Business Name</label>

              <input
                type="text"
                name="businessName"
                value={signupData.businessName}
                onChange={handleChange}
                placeholder="Acme Electronics"
                className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Owner Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Owner Name</label>

              <input
                type="text"
                name="ownerName"
                value={signupData.ownerName}
                onChange={handleChange}
                placeholder="Olusanya"
                className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Email</label>

              <input
                type="email"
                name="email"
                value={signupData.email}
                onChange={handleChange}
                placeholder="admin@acme.ng"
                className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Password</label>

              <input
                type="password"
                name="password"
                value={signupData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-black hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
