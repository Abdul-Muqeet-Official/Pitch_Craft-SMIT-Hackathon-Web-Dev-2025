import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import PrivateRoute from './routes/PrivateRoute'


export default function App() {
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_KEY;
  console.log(GEMINI_API_KEY);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      {/* Protected */}
      <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>

   
  )
}