'use client'

import { motion } from 'motion/react'
import { MapPin } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-900 tracking-tight">लोकदर्पण</h1>
          <div className="flex gap-4">
             <button className="text-gray-600 hover:text-blue-900">खबरें</button>
             <button className="text-gray-600 hover:text-blue-900">वीडियो</button>
             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">लॉगिन</button>
          </div>
        </nav>
      </header>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">हर गांव, हर जिला, हर खबर</h2>
        <p className="text-xl text-gray-600 mb-8">अपने स्थानीय क्षेत्र की ताज़ा जानकारी और खबरें प्राप्त करें।</p>
        
        <div className="flex bg-white p-2 rounded-xl shadow-md border border-gray-100 max-w-2xl">
          <MapPin className="text-gray-400 ml-2 mt-2" />
          <input type="text" placeholder="अपना गाँव या जिला खोजें..." className="flex-grow p-2 outline-none" />
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium">खोजें</button>
        </div>
      </motion.section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">ताज़ा खबरें</h3>
        <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
                    <h4 className="font-bold text-lg mb-2">महत्वपूर्ण स्थानीय समाचार headline {i}</h4>
                    <p className="text-gray-600">यहाँ खबर का विवरण संक्षिप्त में आएगा...</p>
                </div>
            ))}
        </div>
      </section>
    </main>
  )
}
