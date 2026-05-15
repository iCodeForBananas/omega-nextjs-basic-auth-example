export default function PublicPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Public Page</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        This page is accessible without authentication.
      </p>
      <a
        href="/dashboard"
        className="px-6 py-3 bg-black text-white rounded-full hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Go to Dashboard (requires auth)
      </a>
    </div>
  );
}
