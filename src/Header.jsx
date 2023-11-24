import React from 'react';

function Sidebar() {
  return (
    <div className="w-1/5 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
