import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar(){
  const { user, logout } = useAuth();
  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/"><Logo className="text-xl text-slate-900" /></Link>
        <nav className="flex items-center gap-3">
          <Link to="/" className="text-sm text-slate-700">Home</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="text-sm text-slate-700">Dashboard</Link>
              <button onClick={logout} className="text-sm text-slate-700">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm text-slate-700">Login</Link>
              <Link to="/signup" className="text-sm text-white bg-brand2 px-3 py-1 rounded">Sign up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
