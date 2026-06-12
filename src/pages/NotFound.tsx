import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary via-primary-800 to-ink px-4 pt-24 text-center">
      <p className="text-7xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white">Page not found</h1>
      <p className="mt-3 max-w-md text-slate-300">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-semibold text-white shadow-xl shadow-accent/25 transition-transform hover:scale-105"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>
    </section>
  )
}
