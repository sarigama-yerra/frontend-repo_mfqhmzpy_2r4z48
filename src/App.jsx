import React from 'react'
import Hero from './components/Hero'
import Curriculum from './components/Curriculum'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero with Spline background */}
      <Hero />

      {/* Trust / highlights */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            'Project‑based',
            'Beginner friendly',
            'Industry tools',
            'Certification'
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-gray-50 text-gray-700 font-medium">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum grid */}
      <Curriculum />

      {/* Call to action */}
      <CTA />

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500">© {new Date().getFullYear()} E‑commerce Academy</p>
          <nav className="flex items-center gap-6 text-gray-600">
            <a href="#curriculum" className="hover:text-gray-900">Curriculum</a>
            <a href="#" className="hover:text-gray-900">Pricing</a>
            <a href="/test" className="hover:text-gray-900">System Check</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
