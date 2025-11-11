import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/90" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Beginner to Pro Path
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Learn E‑commerce the modern way
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700">
            A practical, project-based course that teaches students how online stores work—from product pages and payments to shipping and analytics.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#curriculum" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition-colors">
              Start Learning
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#demo" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/80 backdrop-blur text-gray-900 font-semibold border border-gray-200 hover:bg-white transition-colors">
              <Play className="w-4 h-4" />
              See a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
