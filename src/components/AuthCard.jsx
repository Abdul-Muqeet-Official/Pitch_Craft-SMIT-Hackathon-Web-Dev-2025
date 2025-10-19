import React from 'react'

export default function AuthCard({ title, subtitle, children }){
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white p-6'>
      <div className='max-w-md w-full'>
        <div className='card'>
          <h1 className='text-2xl font-semibold mb-1'>{title}</h1>
          <p className='text-sm text-soft mb-4'>{subtitle}</p>
          <div className='space-y-4'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}