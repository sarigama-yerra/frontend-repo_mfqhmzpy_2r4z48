import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to teach ecommerce like a pro?</h3>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">Get the full curriculum, lesson slides, and hands-on projects for your classroom.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow-sm hover:bg-blue-50 transition-colors">
              Get the Educator Pack
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#curriculum" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-transparent border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
              Explore the Modules
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
