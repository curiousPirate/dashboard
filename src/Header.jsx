import React from 'react';

function Header() {
  return (
    <div className="bg-white p-4 flex flex-col rounded-lg shadow-md w-screen">
      <div className="flex justify-between items-center">
        <div className="text-sky-900 font-bold">Revspire Sales-Enablement</div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-3xl bg-slate-50 border outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
