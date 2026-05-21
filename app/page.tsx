import LoginForm from './login-form'
import MatrixRain from './matrix-rain'

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black p-8 overflow-hidden">
      <MatrixRain />
      <div className="relative z-10 w-full max-w-lg bg-gray-950/90 border border-green-900 rounded-lg shadow-[0_0_30px_rgba(0,255,0,0.15)] overflow-hidden backdrop-blur-sm">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/90 border-b border-green-900">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs text-green-700 font-mono">terminal — bash</span>
        </div>
        <div className="p-6 font-mono text-sm space-y-2">
          <p className="text-green-600">Last login: {new Date().toUTCString()}</p>
          <p className="text-green-400">Welcome to SecureOS v4.2.1</p>
          <p className="text-green-700 mb-4">Type password to authenticate.</p>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
