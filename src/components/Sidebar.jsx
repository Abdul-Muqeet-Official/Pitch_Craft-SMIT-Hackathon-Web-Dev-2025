import React from 'react';
export default function Sidebar(){
  return (
    <aside className="w-64 p-4 hidden md:block">
      <div className="text-sm font-semibold mb-4">Workspace</div>
      <ul className="space-y-2 text-sm">
        <li className="p-2 rounded hover:bg-slate-100">Overview</li>
        <li className="p-2 rounded hover:bg-slate-100">Projects</li>
        <li className="p-2 rounded hover:bg-slate-100">Settings</li>
      </ul>
    </aside>
  );
}
