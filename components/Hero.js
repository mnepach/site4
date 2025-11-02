function Hero() {
  try {
    return (
      <section
        className="h-screen flex items-center pt-16 sm:pt-20 relative overflow-hidden"
        data-name="hero"
        data-file="components/Hero.js"
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--water-dark)]/90 via-[var(--primary-color)]/85 to-[var(--accent-color)]/80"></div>
        </div>

        {/* Water Ripple Effect */}
        <div className="absolute inset-0 z-0 water-ripple"></div>
        
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-10"></div>
        
        <div className="mobile-container w-full relative z-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left text-white order-2 lg:order-1 space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="promotion-badge mb-2 inline-block text-xs sm:text-sm">
                  🔥 АКЦИЯ 3+1 = ЧЕТВЁРТЫЙ В ПОДАРОК!
                </div>
                
                <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-shadow text-glow leading-tight">
                  Преобразователь ржавчины
                </h1>
                
                <p className="text-lg sm:text-2xl lg:text-3xl text-shadow font-semibold">
                  с грунтовочным эффектом
                </p>
                
                <p className="text-sm sm:text-lg lg:text-xl opacity-95 text-shadow max-w-2xl mx-auto lg:mx-0">
                  Инновационное решение: превращает ржавчину в защитный слой за один шаг
                </p>
                
                <div className="glass-card p-3 sm:p-6 inline-block">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <span className="text-lg sm:text-2xl lg:text-3xl line-through text-gray-300 opacity-70">80 BYN</span>
                    <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white text-glow">39.99 BYN</span>
                    <span className="discount-badge text-sm sm:text-lg">-50%</span>
                  </div>
                  <div className="text-xs sm:text-base lg:text-lg text-white/90">
                    При покупке 3 шт. - 4-я в подарок!
                  </div>
                </div>
                
                <div className="pt-2 sm:pt-4">
                  <a href="#order" className="btn-primary inline-block text-base sm:text-xl py-3 sm:py-5 px-6 sm:px-12 shadow-2xl">
                    Заказать сейчас
                  </a>
                </div>
              </div>
              
              {/* Product Image */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-48 sm:w-64 lg:w-full max-w-md">
                  <img 
                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Преобразователь ржавчины" 
                    className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-br from-red-500 to-red-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-base font-bold shadow-xl animate-pulse">
                    ХИТ
                  </div>
                </div>
              </div>
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