import React from 'react';

export default function Input({label, error, ...props}) {
  return (
    <div>
      {label && <label className="block text-sm font-medium mb-1 text-slate-700">{label}</label>}
      <input className="input border-slate-200 focus:ring-brand1" {...props} />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
