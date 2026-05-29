"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/utils/supabase/client";

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSignOut = async () => {
    try {
      setLoading(true)
      await supabase.auth.signOut()
      router.refresh()
      router.push("/login")
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex items-center justify-center w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-2xl h-175">
        
        <div className="space-y-4 text-center">
        <h1 className="text-2xl font-medium text-slate-800 bg-blue-100 py-2 px-4 border border-blue-500 rounded capitalize">You&apos;re logged in</h1>

          <button onClick={handleSignOut} className="rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-600 cursor-pointer">Sign out</button>
        </div>
        
      </div>
    </div>
  );
}
