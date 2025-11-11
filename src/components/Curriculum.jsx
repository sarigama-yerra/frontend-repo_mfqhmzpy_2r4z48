import React from 'react'
import { ShoppingCart, CreditCard, BarChart3, Package, Globe, ShieldCheck } from 'lucide-react'

const modules = [
  {
    icon: ShoppingCart,
    title: 'Storefront Basics',
    desc: 'Pages, product cards, search, categories, and conversions.'
  },
  {
    icon: CreditCard,
    title: 'Payments 101',
    desc: 'How checkouts work, payment gateways, fraud, and refunds.'
  },
  {
    icon: Package,
    title: 'Operations',
    desc: 'Inventory, shipping, taxes, and order management.'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'KPIs, funnels, A/B testing, and optimizing for growth.'
  },
  {
    icon: Globe,
    title: 'Global Selling',
    desc: 'Localization, currencies, duties, and cross‑border logistics.'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'PCI, GDPR, accessibility, and best practices.'
  }
]

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What you'll learn</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Short, focused modules that build real‑world ecommerce skills step by step.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, idx) => (
            <div key={idx} className="group rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow bg-white">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <m.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{m.title}</h3>
              <p className="mt-2 text-gray-600">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
