import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-semibold text-slate-900">
          Silent Dev Studio
        </h1>

        <p className="text-slate-500">
          Clean authentication with Next.Js & Supabase
        </p>

        <Link
          href="/login"
          className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white font-medium transition hover:bg-blue-700"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}
