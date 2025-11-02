function Hero() {
  try {
    return (
      <section
        className="h-[calc(100vh-60px)] min-h-[calc(100vh-60px)] flex flex-col justify-between py-4 sm:py-6 water-bg water-ripple relative"
        data-name="hero"
        data-file="components/Hero.js"
      >
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--surface-blue)] to-transparent pointer-events-none"></div>
        
        <div className="mobile-container flex flex-col justify-between flex-1 relative z-10">
          <div className="text-center mt-10 sm:mt-8">
            <div className="promotion-badge mb-2 sm:mb-3 inline-block">
              🔥 АКЦИЯ 3+1 = ЧЕТВЁРТЫЙ В ПОДАРОК!
            </div>
          </div>
          
          <div className="text-center text-white flex-1 flex flex-col justify-center">
            <div className="mb-3 sm:mb-4">
              <div className="relative inline-block">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Преобразователь ржавчины" 
                  className="w-full max-w-[280px] sm:max-w-[300px] mx-auto rounded-xl shadow-2xl"
                />
                <div className="absolute -top-2 -right-2 bg-[var(--accent-color)] text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  ХИТ
                </div>
              </div>
            </div>
            
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-shadow text-glow">
              Преобразователь ржавчины<br />
              <span className="text-base sm:text-lg md:text-xl">с грунтовочным эффектом</span>
            </h1>
            
            <p className="text-xs sm:text-sm mb-3 opacity-90 px-4 text-shadow">
              Инновационное решение: превращает ржавчину в защитный слой за один шаг
            </p>
            
            <div className="glass-card p-2 sm:p-3 mb-3 sm:mb-4 inline-block">
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mb-1">
                <span className="price-old text-[#4b5563]">80 BYN</span>
                <span className="price-new text-[var(--accent-color)] text-glow">39.99 BYN</span>
                <span className="discount-badge">-50%</span>
              </div>
              <div className="text-xs text-white/80">
                При покупке 3 шт. - 4-я в подарок!
              </div>
            </div>
            
            <div className="space-y-2 sm:space-y-0 sm:flex sm:gap-3 sm:justify-center">
              <a href="#order" className="btn-primary block sm:inline-block">
                Заказать сейчас
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
