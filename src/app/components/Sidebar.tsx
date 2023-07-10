'use client'

import { useState } from 'react';
import { HomeIcon, UserIcon, LogoutIcon, MenuIcon, XIcon } from '@heroicons/react/solid';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed inset-y-0 left-0 z-50 bg-gray-100 w-64 overflow-y-auto transition duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl font-bold text-gray-800">Sidebar</h2>
        <button className="lg:hidden text-gray-600 hover:text-gray-800" onClick={toggleSidebar}>
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <HomeIcon className="h-6 w-6 mr-2" />
              Home
            </button>
          </li>
          <li>
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <UserIcon className="h-6 w-6 mr-2" />
              Profile
            </button>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <LogoutIcon className="h-6 w-6 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
