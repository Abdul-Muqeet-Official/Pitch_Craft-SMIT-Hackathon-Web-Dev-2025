// import React from 'react';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
// import { useAuth } from '../context/AuthContext';

// export default function Dashboard(){
//   const { user, logout } = useAuth();

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <Navbar />
//       <div className="max-w-7xl mx-auto flex gap-6 p-6">
//         <Sidebar />
//         <main className="flex-1">
//           <div className="card-glass p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-2xl font-bold">Welcome back</h2>
//                 <p className="text-sm text-slate-600">Signed in as <span className="font-medium">{user?.email}</span></p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <button onClick={logout} className="btn-outline">Sign out</button>
//                 <button className="btn-primary">New project</button>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//               <div className="p-4 rounded-lg bg-white/90 shadow">
//                 <div className="text-sm text-slate-500">Projects</div>
//                 <div className="text-3xl font-bold mt-2">12</div>
//               </div>
//               <div className="p-4 rounded-lg bg-white/90 shadow">
//                 <div className="text-sm text-slate-500">Active</div>
//                 <div className="text-3xl font-bold mt-2">5</div>
//               </div>
//               <div className="p-4 rounded-lg bg-white/90 shadow">
//                 <div className="text-sm text-slate-500">Revenue</div>
//                 <div className="text-3xl font-bold mt-2">$9.2k</div>
//               </div>
//             </div>

//           </div>
          
//         </main>
//       </div>
//     </div>
//   )
// }



import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";
import ChatBox from "../components/ChatBox"; // 🧩 import here

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        <Sidebar />
        <main className="flex-1">
          <div className="card-glass p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Welcome back</h2>
                <p className="text-sm text-slate-600">
                  Signed in as <span className="font-medium">{user?.email}</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={logout} className="btn-outline btn-primary">
                  Sign out
                </button>
                {/* <button className="btn-primary">New project</button> */}
              </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-lg bg-white/90 shadow">
                <div className="text-sm text-slate-500">Projects</div>
                <div className="text-3xl font-bold mt-2">12</div>
              </div>
              <div className="p-4 rounded-lg bg-white/90 shadow">
                <div className="text-sm text-slate-500">Active</div>
                <div className="text-3xl font-bold mt-2">5</div>
              </div>
              <div className="p-4 rounded-lg bg-white/90 shadow">
                <div className="text-sm text-slate-500">Revenue</div>
                <div className="text-3xl font-bold mt-2">$9.2k</div>
              </div>
            </div> */}
          </div>

          {/* 🧠 AI Chat Section */}
          <div className="mt-8 p-6 bg-white/90 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-slate-700">AI CV Assistant</h2>
            <p className="text-sm text-slate-500 mb-4">
              Ask AI to help build or improve your CV in a clean landing-page format.
            </p>
            <ChatBox /> {/* 👈 Our AI integration here */}
          </div>
        </main>
      </div>
    </div>
  );
}
