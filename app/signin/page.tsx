// Server Component (NO "use client")

import Image from "next/image";
import Link from "next/link";
import LoginAuthForm from "../../components/input/LoginAuthForm";

export default function Signin() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <main className="w-full max-w-5xl grid lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden m-4">
        {/* Left Panel */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-[#028174] text-white">
          <div>
            <Link href="/">
              <span className="text-2xl font-black tracking-tight">Pramaan</span>
            </Link>

            <div className="mt-16">
              <h2 className="text-4xl font-extrabold leading-tight mb-4">
                Your Trusted <br /> Civic Partner
              </h2>
              <p className="text-teal-100 text-base max-w-sm">
                Join thousands of citizens simplifying documentation and errands.
              </p>
            </div>
          </div>

          <div className="text-sm font-medium opacity-80">
            Verified by Indian Legal Standards
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-8 md:p-12 lg:p-14">
          <header className="mb-8 text-center lg:text-left">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500">
              New to Pramaan?
              <Link
                href="/signup"
                className="text-[#028174] font-semibold hover:underline ml-2"
              >
                Create an account
              </Link>
            </p>
          </header>

          <form className="space-y-5">
            <LoginAuthForm type="email" name="email" lable="Email address" />
            <LoginAuthForm type="password" name="password" lable="Password" />

            <button
              type="submit"
              className="w-full bg-[#028174] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-[#026b61] transition-colors active:scale-[0.98]"
            >
              Sign In
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <button className="flex items-center justify-center gap-2 w-full border border-gray-200 rounded-xl py-3 hover:bg-gray-50 transition-colors">
              <Image src="/google.png" alt="Google" width={18} height={18} />
              <span className="font-medium text-gray-700">
                Continue with Google
              </span>
            </button>
          </form>

          <div className="mt-8 text-center text-xs text-gray-400">
            Secure • Encrypted • Trusted
          </div>
        </div>
      </main>
    </div>
  );
}
