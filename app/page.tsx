import LoginForm from './login-form'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <p className="text-sm text-zinc-500 mb-4">PASSWORD env: {process.env.PASSWORD ?? '(not set)'}</p>
      <LoginForm />
    </div>
  )
}
