function Header() {
  try {
    return (
      <header
        className="sticky top-0 z-30 bg-[var(--water-dark)]/90 backdrop-blur-lg border-b border-[var(--border)] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        data-name="header"
        data-file="components/Header.js"
      >
        <div className="mobile-container py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center shadow-lg water-ripple">
                <div className="icon-shield text-2xl text-[var(--text-primary)] text-glow"></div>
              </div>
              <span className="text-2xl font-bold gradient-text text-shadow">MetalGuard</span>
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