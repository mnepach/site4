function Header() {
  try {
    return (
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[var(--water-dark)] to-[var(--secondary-color)] backdrop-blur-lg border-b border-[var(--primary-color)]/30 shadow-2xl"
        data-name="header"
        data-file="components/Header.js"
      >
        <div className="mobile-container py-3 sm:py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl glass-card flex items-center justify-center shadow-xl water-ripple transform hover:scale-110 transition-transform duration-300">
                <div className="icon-shield text-xl sm:text-2xl lg:text-3xl text-white text-glow"></div>
              </div>
              <div className="text-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-[var(--accent-color)] text-shadow block">
                  MetalGuard
                </span>
                <span className="text-xs sm:text-sm text-white/80 hidden sm:block">
                  Защита металла от коррозии
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}