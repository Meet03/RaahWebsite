import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'
import { useTheme } from './hooks/useTheme'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Solutions = lazy(() => import('./pages/Solutions'))
const Industries = lazy(() => import('./pages/Industries'))
const Platforms = lazy(() => import('./pages/Platforms'))
const Contact = lazy(() => import('./pages/Contact'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading page">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-accent border-t-transparent" />
    </div>
  )
}

export default function App() {
  const { theme, toggleTheme, palette, setPalette } = useTheme()
  const { scrollYProgress } = useScroll()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent"
        aria-hidden="true"
      />
      <Navbar theme={theme} toggleTheme={toggleTheme} palette={palette} setPalette={setPalette} />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Legal kind="privacy" />} />
            <Route path="/terms-and-conditions" element={<Legal kind="terms" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <BackToTop />
      <Footer />
    </div>
  )
}
