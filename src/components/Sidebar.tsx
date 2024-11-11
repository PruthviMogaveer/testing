import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaUser, FaCog, FaChartBar, FaTimes } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Search Assistant', icon: <FaHome size={20} />, path: '/' },
    { name: 'Profile', icon: <FaUser size={20} />, path: '/profile' },
    { name: 'Analytics', icon: <FaChartBar size={20} />, path: '/analytics' },
    { name: 'Settings', icon: <FaCog size={20} />, path: '/settings' },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="fixed top-4 left-4 z-50 block md:hidden ">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600 hover:text-gray-800"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen max-md:absolute
          bg-white text-gray-800 shadow-lg
          transition-all duration-300 ease-in-out
          ${isExpanded ? 'w-64' : 'w-20'} 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          relative
        `}
      >
        {/* Desktop Toggle Button */}
        <div className="hidden md:block">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`
              absolute -right-3 top-12
              w-6 h-6
              bg-white
              border border-gray-200
              rounded-full
              flex items-center justify-center
              text-gray-500 hover:text-gray-700
              cursor-pointer
              shadow-md
              transition-transform duration-300
              ${isExpanded ? 'transform rotate-0' : 'transform rotate-180'}
            `}
          >
            <MdKeyboardArrowLeft size={18} />
          </button>
        </div>

        {/* Logo Section */}
        <div className="flex items-center h-16 border-b border-gray-200 px-4">
          <div className="flex items-center">
            {/* Replace with your logo */}
            <div className="h-8 w-8 bg-gray-500 rounded-full"></div>
            {isExpanded && (
              <span className="ml-3 font-semibold text-xl">Company</span>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`
                flex items-center px-4 py-3 
                text-gray-700 hover:bg-gray-100
                transition-colors duration-200
                ${!isExpanded ? 'justify-center' : ''}
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="inline-flex items-center justify-center">
                {item.icon}
              </span>
              {isExpanded && (
                <span className="ml-3">{item.name}</span>
              )}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content Wrapper */}
      {/* <div
        className={`
          flex-1
          transition-all duration-300 ease-in-out
          ${isExpanded ? 'md:ml-64' : 'md:ml-20'}
          ${isMobileMenuOpen ? 'ml-0' : 'ml-0'}
        `}
      >
      
        Your content is rendered here through the Router */}
      {/* </div> */}
    </>
  );
};

export default Sidebar;