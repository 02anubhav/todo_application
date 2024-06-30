import React from 'react'

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">TodoApp</div>
      <div className="flex justify-between items-center gap-3">
        <div class="text-white">Anubhav Parashar</div>
        <img
          className="h-12 w-12 rounded-full border border-slate-100"
          src="https://i.pinimg.com/564x/63/d9/9a/63d99a15701b2d4a1e1b4d7c45e66b9d.jpg"
          alt=""
        />
      </div>
    </nav>
  );
}

export default Navbar