'use client';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Enter access token to authenticate.</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const token = new FormData(e.currentTarget).get('token') as string;
          window.location.href = `/dashboard?token=${encodeURIComponent(token)}`;
        }}
        className="flex flex-col gap-4 items-center"
      >
        <input
          name="token"
          type="text"
          placeholder="Enter access token"
          required
          className="px-4 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
