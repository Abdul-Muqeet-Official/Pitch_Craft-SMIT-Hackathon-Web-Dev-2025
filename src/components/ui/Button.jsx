import React from 'react';

export default function Button({children, className='', variant='primary', ...props}) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
