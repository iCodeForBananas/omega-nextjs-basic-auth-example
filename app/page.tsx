'use client'

import { useActionState } from 'react'
import { login } from '@/app/actions/auth'

export default function Home() {
  const [state, action, pending] = useActionState(login, undefined)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <form action={action} className="flex flex-col gap-4 items-center">
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          required
          className="px-4 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700"
        />
        {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
        <button
          type="submit"
          disabled={pending}
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 disabled:opacity-50"
        >
          {pending ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
