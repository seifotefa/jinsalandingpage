import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Brand / Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Jinsa Logo"
              className="h-8 w-auto sm:h-10"
            />
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-700 hover:text-[#6347f1] transition">
                How It Works
            </a>
            <a href="#chain" className="text-gray-700 hover:text-[#6347f1] transition">
                Provenance
            </a>
            <a
                href="#waitlist"
                className="bg-[#6347f1] text-white px-4 py-2 rounded-full shadow hover:bg-[#4b2fd6] transition"
            >
                Join Waitlist
            </a>
            </nav>


          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-[#6347f1] focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 shadow-lg border-t border-[#ede9fe]">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a
                href="#about"
                className="text-gray-700 hover:text-[#6347f1] transition"
                onClick={() => setIsOpen(false)}
            >
                How It Works
            </a>
            <a
                href="#chain"
                className="text-gray-700 hover:text-[#6347f1] transition"
                onClick={() => setIsOpen(false)}
            >
                Provenance
            </a>
            <a
                href="#waitlist"
                className="bg-[#6347f1] text-white px-4 py-2 rounded-full shadow hover:bg-[#4b2fd6] transition"
                onClick={() => setIsOpen(false)}
            >
                Join Waitlist
            </a>
            </nav>

        </div>
      )}
    </header>
  );
}
