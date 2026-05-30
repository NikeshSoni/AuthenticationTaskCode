"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/client";
import Image from "next/image";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error("Google OAuth error:", error.message);
      alert(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
        <div className="grid md:grid-cols-2">
          {/* Left side - Image/Brand Section */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
            <img src="https://i.pinimg.com/1200x/58/cf/5f/58cf5f7a5606689e3190f9debc5f1912.jpg"  alt="Brand illustration"
                  className="object-cover"
               />
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/70 to-transparent p-8">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-2">WHATIF</h2>
                <p className="text-sm opacity-90">Discover amazing experiences</p>
              </div>
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="p-8 md:p-10">
            {/* Logo/Brand Section for mobile */}
            <div className="mb-8 text-center md:hidden">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="mt-2 text-sm text-slate-500">Sign in to continue to your account</p>
            </div>

            {/* Desktop version heading */}
            <div className="hidden md:block mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="mt-2 text-sm text-slate-500">Sign in to continue to your account</p>
            </div>

            {/* Feature highlights */}
            <div className="mb-6 hidden md:grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure access</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 support</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Fast & easy</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free access</span>
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-slate-500">Continue with</span>
              </div>
            </div>

            {/* Google Sign In Button */}
            <button
              type="button"
              onClick={signInWithGoogle}
              disabled={isLoading}
              className="group relative flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <svg className="h-5 w-5 transition-transform group-hover:scale-105" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span>Continue with Google</span>
                </>
              )}
            </button>

            {/* Additional Options */}
            <div className="mt-6 text-center text-xs text-slate-400">
              <p>
                By continuing, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Email Sign In Option */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                Or{' '}
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  sign in with email
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}