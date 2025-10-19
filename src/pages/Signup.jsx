import React, {useState} from 'react';
import AuthHero from '../components/AuthHero';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup(){
  const { signup } = useAuth();
  const nav = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [err,setErr] = useState('');
  const [loading,setLoading] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    setErr('');
    setLoading(true);
    try{
      await signup(email,password);
      nav('/dashboard');
    }catch(error){
      setErr(error.message);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex">
      <AuthHero title="Create an account" subtitle="Start your journey with a beautiful dashboard." />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full card-glass p-8 ">
          <h2 className="text-2xl flex items-center justify-center font-bold mb-1">Sign up</h2>
          {/* <p className="text-sm text-soft mb-6">Create a secure account to manage your workspace.</p> */}

          <form onSubmit={handleSubmit} className="space-y-4">
            {err && <div className="text-red-500 text-sm">{err}</div>}
            <Input label="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
            <Input label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
            <div className="flex justify-end">
              <Button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</Button>
            </div>

            <div className="text-center text-sm text-slate-500">
              Already have an account? <Link to="/login" className="text-brand2 font-medium">Sign in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
