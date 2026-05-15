export default function Home() {
  const missingEnv = !process.env.BASIC_AUTH_USER || !process.env.BASIC_AUTH_PASS;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <h1 className="text-3xl font-bold">Basic Auth Demo</h1>
      {missingEnv && (
        <p className="text-red-600 dark:text-red-400 text-center max-w-md">
          ⚠️ BASIC_AUTH_USER and/or BASIC_AUTH_PASS are not set. Protected routes will reject all requests.
        </p>
      )}
      <div className="flex gap-4">
        <a
          href="/public"
          className="px-6 py-3 border border-zinc-300 rounded-full hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          Public Page
        </a>
        <a
          href="/dashboard"
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Dashboard (Protected)
        </a>
      </div>
    </div>
  );
}
