import React from 'react';
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs';
// import logo from './path-to-your-logo.png'; // Adjust the path to your logo file

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={`${openSidebarToggle ? "w-64" : "w-0"} transition-width duration-300 fixed h-full bg-gray-900 text-white overflow-hidden`}>
      <div className='flex items-center justify-between p-4 text-black  bg-white'>
        <div className='flex items-center space-x-2'>
          {/* <img src={logo} alt="Logo" className="w-8 h-8" /> Add your logo here */}
          <div className="mt-2 justify-center">
            <h1 className="">PIOSA</h1>
          </div>
        </div>
      </div>

      <ul className='mt-4'>
        <li className='px-4 py-3 font-bold text-white hover:bg-gray-700'>
          <a href="#" className='flex items-center space-x-3'>
            <BsGrid1X2Fill className='text-lg' />
            <span>Deployment Options</span>
          </a>
        </li>
        <li className='px-4 py-3 font-bold text-white hover:bg-gray-700'>
          <a href="#" className='flex items-center space-x-3'>
            <BsFillArchiveFill className='text-lg' />
            <span>Dashboard</span>
          </a>
        </li>
        <li className='px-4 py-3 font-bold text-white hover:bg-gray-700'>
          <a href="#" className='flex items-center space-x-3'>
            <BsFillGrid3X3GapFill className='text-lg' />
            <span>Categories</span>
          </a>
        </li>
        <li className='px-4 py-3 font-bold text-white hover:bg-gray-700'>
          <a href="/settings" className='flex items-center space-x-3'>
            <BsFillGearFill className='text-lg' />
            <span>Setting</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
