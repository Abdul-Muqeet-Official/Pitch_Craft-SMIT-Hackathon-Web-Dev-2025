import React from 'react';
export default function Logo({className='text-2xl font-bold text-white'}) {
  return (
    <div className={className} style={{letterSpacing: '-0.5px'}}>
      <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand2 to-brand1">Pitch</span>
      <span className="ml-1 text-white/90">Craft</span>
    </div>
  );
}
