import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home(){
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='max-w-4xl mx-auto text-center py-28'>
        <h1 className='text-4xl font-bold mb-4'>PitchCraft</h1>
        <p className='text-lg text-soft mb-6'>A modern template built with Vite, React and Firebase</p>
        <div className='flex gap-4 justify-center'>
          <Link to='/signup' className='btn-primary'>Get started</Link>
          <Link to='/login' className='px-4 py-2 border rounded-lg'>Sign in</Link>
        </div>
      </div>
    </div>
  )
}
