import { useState } from 'react';
import { FaBars, FaHome, FaUser, FaCog, FaChartBar, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', icon: <FaHome size={20} />, path: '/' },
    { name: 'Profile', icon: <FaUser size={20} />, path: '/profile' },
    { name: 'Analytics', icon: <FaChartBar size={20} />, path: '/analytics' },
    { name: 'Settings', icon: <FaCog size={20} />, path: '/settings' },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="fixed top-4 left-4 z-50 block md:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600 hover:text-gray-800"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen
          bg-gray-800 text-white
          transition-all duration-300 ease-in-out
          ${isExpanded ? 'w-64' : 'w-20'} 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Toggle Button - Hidden on mobile */}
        <div className="hidden md:block">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute top-4 right-4 text-gray-300 hover:text-white"
          >
            <FaBars size={20} />
          </button>
        </div>

        {/* Logo/Brand */}
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          {isExpanded ? (
            <span className="text-xl font-bold">Logo</span>
          ) : (
            <span className="text-xl font-bold">L</span>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className={`
                flex items-center px-4 py-3 
                text-gray-300 hover:bg-gray-700 hover:text-white
                transition-colors duration-200
                ${!isExpanded ? 'justify-center' : ''}
              `}
            >
              <span className="inline-flex items-center justify-center">
                {item.icon}
              </span>
              {isExpanded && (
                <span className="ml-3">{item.name}</span>
              )}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content Wrapper */}
      <main
        className={`
          min-h-screen
          transition-all duration-300 ease-in-out
          ${isExpanded ? 'md:ml-64' : 'md:ml-20'}
          ${isMobileMenuOpen ? 'ml-0' : 'ml-0'}
        `}
      >
        {/* Your main content here */}
      </main>
    </>
  );
};

export default Sidebar; 