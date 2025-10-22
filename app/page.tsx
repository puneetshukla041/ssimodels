'use client'

import React from 'react'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        SS Innovations AR Experience
      </h1>

      {/* Single AR Button */}
      <a
        href="intent://arvr.google.com/scene-viewer/1.0?file=https://d4olfypp2qmmqbyx.public.blob.vercel-storage.com/Machine_Updated-eOpAysCMZk4FOaAUCoGXCnvtJx4JSM.glb&mode=ar_preferred#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;end;"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-cyan-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        📱 View in your room
      </a>
    </main>
  )
}
