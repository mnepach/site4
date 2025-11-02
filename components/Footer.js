function Footer() {
  try {
    const handleContactTap = (type) => {
      if (type === 'phone') {
        window.location.href = 'tel:+375292258014';
      } else if (type === 'email') {
        window.location.href = 'mailto:alivitarget@mail.ru';
      }
    };

    return (
      <footer className="py-8 sm:py-12 bg-gradient-to-b from-[var(--water-dark)] to-[var(--secondary-color)] text-white" data-name="footer" data-file="components/Footer.js">
        <div className="mobile-container">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg water-bg flex items-center justify-center shadow-lg">
                <div className="icon-shield text-lg sm:text-xl text-white"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold">MetalGuard</span>
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center gap-2">
                <div className="icon-clock text-sm sm:text-base"></div>
                <span className="text-sm sm:text-base">пн-вс 09:00 - 21:00</span>
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <div 
                  className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => handleContactTap('phone')}
                >
                  <div className="icon-phone text-sm sm:text-base"></div>
                  <span className="text-sm sm:text-base font-bold">
                    +375 (29) 225-80-14
                  </span>
                </div>
                <div 
                  className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => handleContactTap('email')}
                >
                  <div className="icon-mail text-sm sm:text-base"></div>
                  <span className="text-sm sm:text-base font-bold">
                    alivitarget@mail.ru
                  </span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-4 sm:pt-6 space-y-3 sm:space-y-4">
              <div className="text-xs sm:text-sm text-gray-300">
                <p>ООО "АЛИВИТАРГЕТ" УНП 193766073</p>
                <p>220113, до востребования</p>
                <p className="mt-1 sm:mt-2">Акция действует на всей территории Беларуси</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
                <a 
                  href="politics.html" 
                  className="text-white hover:text-[var(--accent-color)] transition-colors font-medium underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Политика конфиденциальности
                </a>
                <a 
                  href="oferta.html" 
                  className="text-white hover:text-[var(--accent-color)] transition-colors font-medium underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Публичная оферта
                </a>
                <a 
                  href="obmen_vozvrat.html" 
                  className="text-white hover:text-[var(--accent-color)] transition-colors font-medium underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Обмен и возврат товара
                </a>
              </div>
              
              <div className="text-xs sm:text-sm text-gray-400">
                <p>© 2025 MetalGuard. Все права защищены.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}