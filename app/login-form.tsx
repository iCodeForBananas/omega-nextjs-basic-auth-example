'use client'

import { useActionState } from 'react'
import { login } from '@/app/actions/auth'

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined)

  return (
    <form action={action} className="w-full max-w-md">
      <div className="flex items-center gap-2">
        <span className="text-green-400">$</span>
        <input
          name="password"
          type="password"
          placeholder="enter-access-key"
          required
          autoComplete="off"
          className="flex-1 bg-transparent border-none outline-none text-green-400 placeholder-green-800 font-mono caret-green-400"
        />
      </div>
      {state?.error && (
        <p className="text-red-500 font-mono text-sm mt-2">
          ✗ access denied: invalid credentials
        </p>
      )}
      {pending && (
        <p className="text-green-400 font-mono text-sm mt-2 animate-pulse">
          authenticating...
        </p>
      )}
    </form>
  )
}
