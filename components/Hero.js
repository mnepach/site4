function Hero() {
  try {
    return (
      <section className="py-8 sm:py-12 water-bg water-ripple" data-name="hero" data-file="components/Hero.js">
        <div className="mobile-container">
          <div className="text-center mb-6 sm:mb-8">
            <div className="promotion-badge mb-4 sm:mb-6 inline-block">
              🔥 АКЦИЯ 3+1 = ЧЕТВЁРТЫЙ В ПОДАРОК!
            </div>
            <div className="glass-card inline-block px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <span className="text-white font-medium text-sm sm:text-base text-glow">✨ ПРОФЕССИОНАЛЬНАЯ ЗАЩИТА МЕТАЛЛА</span>
            </div>
          </div>
          
          <div className="text-center text-white mb-6 sm:mb-8">
            <div className="mb-6 sm:mb-8">
              <div className="relative inline-block">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Преобразователь ржавчины" 
                  className="w-full max-w-xs sm:max-w-sm mx-auto rounded-xl shadow-2xl"
                />
                <div className="absolute -top-2 -right-2 bg-[var(--accent-color)] text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  ХИТ
                </div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-shadow text-glow">
              Преобразователь ржавчины
              <span className="block text-xl sm:text-2xl md:text-3xl mt-1">с грунтовочным эффектом</span>
            </h1>
            
            <p className="text-base sm:text-lg mb-6 opacity-90 px-4 text-shadow">
              Инновационное решение: превращает ржавчину в защитный слой за один шаг
            </p>
            
            <div className="glass-card p-4 mb-6 sm:mb-8 inline-block">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-2">
                <span className="price-old">80 BYN</span>
                <span className="price-new text-[var(--accent-color)] text-glow">39.99 BYN</span>
                <span className="discount-badge">-50%</span>
              </div>
              <div className="text-xs sm:text-sm text-white/80">
                При покупке 3 шт. - 4-я в подарок!
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-0 sm:flex sm:gap-4 sm:justify-center">
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
