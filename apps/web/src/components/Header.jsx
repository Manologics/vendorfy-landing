import React from 'react';

const BASE44_URL = 'https://base44.onrender.com';

const Header = () => {
  const scrollToHowItWorks = () => {
    const targetElement = document.getElementById('how-it-works');
    if (targetElement) {
      window.scrollTo({
        behavior: 'smooth',
        top: targetElement.offsetTop
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="w-full bg-slate-900 backdrop-blur-sm border-b border-white/10 transition-all duration-200 relative z-10 flex flex-col">
      {/* Ticker Bar */}
      <div 
        className="w-full bg-primary text-gray-900 py-4 overflow-hidden flex whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity duration-300 border-y border-primary/20"
        onClick={scrollToHowItWorks}
      >
        <div className="animate-marquee flex space-x-12 items-center min-w-max" style={{ animationDuration: '40s' }}>
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-sm md:text-base font-extrabold uppercase tracking-widest flex items-center gap-12">
              <span>LIMITED TIME ONLY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-900/60"></span>
              <span>7-DAY FREE TRIAL</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-900/60"></span>
              <span>CANCEL ANYTIME</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-900/60"></span>
            </span>
          ))}
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="h-[var(--header-height)] flex items-center w-full">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="text-xl md:text-2xl font-bold text-[#FFD700] tracking-tight hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          >
            Vendorfy AI
          </button>

          {/* Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={BASE44_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base font-medium text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1"
            >
              Login
            </a>
            <a
              href={BASE44_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F4C430] hover:bg-[#E6B800] text-[#1F2937] font-medium px-5 py-2 sm:px-6 sm:py-2.5 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F2937] text-sm sm:text-base shadow-sm inline-flex items-center justify-center"
            >
              Start Selling
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;