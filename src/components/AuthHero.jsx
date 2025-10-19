import React from 'react';
import Logo from './Logo.jsx'; // add .jsx extension explicitly


export default function AuthHero({title, subtitle}) {
  return (
    <div className="hidden md:flex md:flex-1 items-center justify-center min-h-screen bg-hero-grad text-white p-10">
      <div className="max-w-lg">
        <Logo className="text-3xl mb-6" />
        <h1 className="text-4xl font-extrabold mb-4 leading-tight">{title}</h1>
        <p className="text-lg text-white/90 mb-8">{subtitle}</p>

        <div className="grid grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-white/10 text-white">
            <div className="text-2xl font-bold">🚀</div>
            <div className="text-sm mt-2">Fast performance</div>
          </div>
          <div className="p-4 rounded-xl bg-white/10 text-white">
            <div className="text-2xl font-bold">🔒</div>
            <div className="text-sm mt-2">Secure auth</div>
          </div>
          <div className="p-4 rounded-xl bg-white/10 text-white">
            <div className="text-2xl font-bold">🎨</div>
            <div className="text-sm mt-2">Beautiful UI</div>
          </div>
        </div>
      </div>
    </div>
  )
}
