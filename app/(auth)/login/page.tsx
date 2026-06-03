"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { motion } from "framer-motion";

import logo from "../../../public/logo.png";
import paypilotAuth from "../../../public/paypilotAuth.png";

import InputField from "@/features/auth/components/InputField";
import { useLogin } from "@/features/auth/hooks/useLogin";

type UserType = "owner" | "member";


// For the member, the system automatically detects if the phone number's password is set
// Or I could just let user create their first time password.

const LoginPage = () => {
  const { handleSubmit, handleChange, loginData, error } = useLogin();
  const [userType, setUserType] = useState<UserType>("owner");

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
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

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-12 text-white">
          <h2 className="text-4xl font-bold max-w-md leading-tight">
            Understand. Control. Protect. Your Money.
          </h2>

          <p className="mt-4 text-white/80 max-w-md">
            Monitor cashflow, detect anomalies, and make smarter financial
            decisions from one centralized dashboard.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex flex-col items-center space-y-2 mb-10">
            <Image src={logo} alt="PayPilot" className="w-12 h-12" />

            <h2 className="text-2xl font-semibold">PayPilot</h2>

            <p className="text-sm text-gray-500 text-center">
              Monitor Cashflow. Detect Anomalies. Stay in Control.
            </p>
            <p className="text-gray-500 mb- text-lg">
              Sign in to your PayPilot dashboard
            </p>
          </div>

          {/* Header */}
          <div className="space-y-4 text-center mb-8">
            {/* User Type Toggle */}
            <div className="flex items-center justify-center gap-8">
              <button
                type="button"
                onClick={() => setUserType("owner")}
                className="relative pb-2 text-sm font-medium transition-colors"
                style={{
                  color:
                    userType === "owner"
                      ? "var(--text-primary)"
                      : "var(--text-muted)",
                }}>
                Business Owner
                {userType === "owner" && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-t-sm"
                    style={{ background: "var(--black)" }}
                  />
                )}
              </button>

              <button
                type="button"
                onClick={() => setUserType("member")}
                className="relative pb-2 text-sm font-medium transition-colors"
                style={{
                  color:
                    userType === "member"
                      ? "var(--text-primary)"
                      : "var(--text-muted)",
                }}>
                Team Member
                {userType === "member" && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-t-sm"
                    style={{ background: "var(--black)" }}
                  />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {userType === "owner" ? (
              <motion.div
                key="email"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}>
                <InputField
                  label="Email"
                  name="email"
                  value={loginData.email}
                  type="email"
                  placeholder="admin@acme.ng"
                  onChange={handleChange}
                />
              </motion.div>
            ) : (
              <motion.div
                key="phone"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}>
                <InputField
                  label="Phone Number"
                  name="phone"
                  value={loginData.phone || ""}
                  type="tel"
                  placeholder="+234 (801) 234-5678"
                  onChange={handleChange}
                />
              </motion.div>
            )}

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label className="font-medium">Password</label>

                <Link
                  href="/forgot-password"
                  className="text-black hover:underline">
                  Forgot?
                </Link>
              </div>

              <input
                type="password"
                name="password"
                value={loginData.password}
                placeholder="••••••••"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
              Sign In
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-8">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-black font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
