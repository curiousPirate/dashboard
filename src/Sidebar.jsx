import React, { useState } from 'react';

function Sidebar({ setDisplayContent }) {
  const [activeItem, setActiveItem] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClick = (content) => {
    setDisplayContent(content);
    setActiveItem(content);
    if (window.innerWidth <= 768) {
      setShowSidebar(false);
    }
  };

  return (
    <div className="bg-white text-sky-900">
      <div className="lg:w-64 bg-white p-4 hidden lg:block">
        <img src='/src/assets/revspire logo.webp' alt="Revspire Logo"></img>
        <ul className="space-y-3">
          <li
            className={`flex items-center cursor-pointer ${activeItem === 'Content Portal' ? 'font-bold' : ''}`}
            onClick={() => handleClick('Content Portal')}
          >
            <img className='px-2' src='/src/assets/activity.svg' alt="Activity Icon"></img>
            <span>Content Portal</span>
          </li>
                  <li
          className={`flex items-center cursor-pointer ${activeItem === 'Pitch Manager' ? 'font-bold' : ''}`}
          onClick={() => handleClick('Pitch Manager')}
        >
          <img className='px-2' src='/src/assets/category.svg' alt="Category Icon"></img>
          <span>Pitch Manager</span>
        </li>
        <li
          className={`flex items-center cursor-pointer ${activeItem === 'Tag Manager' ? 'font-bold' : ''}`}
          onClick={() => handleClick('Tag Manager')}
        >
          <img className='px-2' src='/src/assets/calendar.svg' alt="Calendar Icon"></img>
          <span>Tag Manager</span>
        </li>
        <li
          className={`flex items-center cursor-pointer ${activeItem === 'About' ? 'font-bold' : ''}`}
          onClick={() => handleClick('About')}
        >
          <img className='px-2' src='/src/assets/wallet.svg' alt="Wallet Icon"></img>
          <span>About</span>
        </li>
        </ul>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="lg:hidden px-4 py-2">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="block text-white focus:outline-none focus:text-gray-800"
        >
          ☰
        </button>
      </div>

      {/* Sidebar for mobile */}
      {showSidebar && (
    <div className="lg:hidden bg-white fixed inset-y-0 left-0 z-50 w-1/3 transform transition-transform ease-in-out duration-300">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setShowSidebar(false)}
              className="text-white focus:outline-none focus:text-gray-800"
            >
              ✕
            </button>
          </div>
          <div className="p-4">
            <img src='/src/assets/revspire logo.webp' alt="Revspire Logo"></img>
            <ul className="space-y-3">
              <li
                className={`flex items-center cursor-pointer ${activeItem === 'Content Portal' ? 'font-bold' : ''}`}
                onClick={() => handleClick('Content Portal')}
              >
                <img className='px-2' src='/src/assets/activity.svg' alt="Activity Icon"></img>
                <span>Content Portal</span>
              </li>
                      <li
          className={`flex items-center cursor-pointer ${activeItem === 'Pitch Manager' ? 'font-bold' : ''}`}
          onClick={() => handleClick('Pitch Manager')}
        >
          <img className='px-2' src='/src/assets/category.svg' alt="Category Icon"></img>
          <span>Pitch Manager</span>
        </li>
        <li
          className={`flex items-center cursor-pointer ${activeItem === 'Tag Manager' ? 'font-bold' : ''}`}
          onClick={() => handleClick('Tag Manager')}
        >
          <img className='px-2' src='/assets/calendar.svg' alt="Calendar Icon"></img>
          <span>Tag Manager</span>
        </li>
        <li
          className={`flex items-center cursor-pointer ${activeItem === 'About' ? 'font-bold' : ''}`}
          onClick={() => handleClick('About')}
        >
          <img className='px-2' src='/src/assets/wallet.svg' alt="Wallet Icon"></img>
          <span>About</span>
        </li>

            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
