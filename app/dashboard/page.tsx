export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">🔒 Dashboard</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        You are authenticated! This page is protected by HTTP Basic Auth.
      </p>
      <a
        href="/public"
        className="px-6 py-3 border border-zinc-300 rounded-full hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
      >
        Go to Public Page
      </a>
      <a
        href="/api/sign-out"
        className="mt-4 px-6 py-3 border border-red-300 text-red-600 rounded-full hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-950"
      >
        Sign Out
      </a>
    </div>
  );
}
