// Server Component (NO "use client")

import Link from "next/link";
import Image from "next/image";
import AuthForm from "../../components/input/AuthForm";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#028174]">

        <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white">
          <div className="max-w-md">
          <h2 className="text-4xl font-extrabold leading-tight mb-4">
            Join the circle of trusted assistance
          </h2>
          <p className="text-base text-teal-100">
            Create an account to manage your civic tasks with verified experts.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-white/15 rounded-full text-xs backdrop-blur-sm">
              ✓ Verified Agents
            </span>
            <span className="px-3 py-1 bg-white/15 rounded-full text-xs backdrop-blur-sm">
              ✓ Secure Data
            </span>
          </div>
        </div>
      </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 bg-gray-50 lg:bg-white">
        <div className="w-full max-w-md">
          <Link href="/" className="inline-block mb-8">
            <span className="text-2xl font-extrabold text-[#028174]">
              Pramaan
            </span>
          </Link>

          <div className="mb-6">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">
              Create Account
            </h1>
            <p className="text-gray-500 text-sm">
              Get started with a trusted civic partner.
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 w-full border border-gray-200 rounded-xl py-3 hover:bg-gray-50 transition-colors mb-6">
            <Image src="/google.png" alt="Google" width={18} height={18} />
            <span className="text-sm font-medium text-gray-700">
              Sign up with Google
            </span>
          </button>

          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-3 text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <form className="space-y-4">
            <AuthForm type="text" name="name" lable="Full Name" />
            <AuthForm type="email" name="email" lable="Email" />
            <AuthForm type="password" name="password" lable="Password" />

            <div className="flex items-start gap-2 text-xs text-gray-500">
              <input
                type="checkbox"
                required
                className="mt-1 accent-[#028174]"
              />
              <p>
                I agree to the
                <Link href="/terms" className="text-[#028174] ml-1">
                  Terms
                </Link>
                and
                <Link href="/privacy" className="text-[#028174] ml-1">
                  Privacy Policy
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#028174] text-white font-semibold py-3 rounded-xl hover:bg-[#026b61] transition-colors active:scale-[0.98]"
            >
              Get Started
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account?
            <Link href="/signin" className="text-[#028174] ml-1">
              Sign in
            </Link>
          </div>

          <p className="mt-6 text-center text-[10px] text-gray-400">
            Secure • Encrypted • Trusted
          </p>
        </div>
      </div>
    </div>
  );
}
