import React, {useState} from 'react';
import AuthHero from '../components/AuthHero';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Login(){
  const { login } = useAuth();
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
      await login(email,password);
      nav('/dashboard');
    }catch(error){
      setErr(error.message);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex">
      <AuthHero title="Welcome back" subtitle="Sign in to continue to your professional dashboard." />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full card-glass p-8">
          <h2 className="text-2xl font-bold mb-1 flex items-center justify-center">Login</h2>
          {/* <p className="text-sm text-soft mb-6">Use your account to access the dashboard</p> */}

          <form onSubmit={handleSubmit} className="space-y-4">
            {err && <div className="text-red-500 text-sm">{err}</div>}
            <Input label="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
            <Input label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
            <div className="flex items-center justify-between">
              <Link to="/signup" className="text-sm text-slate-600">Create an account</Link>
              <Button type="submit" disabled={loading}>{loading ? 'Signing...' : 'Sign in'}</Button>
            </div>

            <div className="flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-slate-200"></div>
              <div className="text-sm text-slate-400">Or continue with</div>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="btn-outline"><span>Google</span></button>
              <button type="button" className="btn-outline"><span>GitHub</span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
