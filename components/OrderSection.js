function OrderSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    agreed: false
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  try {
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formData.agreed) {
        alert('Необходимо согласиться с политикой конфиденциальности');
        return;
      }
      
      setIsSubmitting(true);
      

      setTimeout(() => {
        alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', phone: '', agreed: false });
        setIsSubmitting(false);
      }, 2000);
    };

    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    };

    const handleInputFocus = () => {
      setTimeout(() => {
        window.scrollTo({
          top: document.getElementById('order').offsetTop - 100,
          behavior: 'smooth'
        });
      }, 300);
    };

    return (
      <section id="order" className="py-8 sm:py-12 bg-gradient-to-b from-[var(--surface-blue)] to-[var(--water-dark)]" data-name="order-section" data-file="components/OrderSection.js">
        <div className="mobile-container">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/50">
            <div className="text-center mb-6 sm:mb-8">
              <div className="promotion-badge mb-4 animate-pulse">
                🔥 АКЦИЯ 3+1 = ЧЕТВЁРТЫЙ В ПОДАРОК!
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[var(--text-primary)]">
                Преобразователь ржавчины<br />
                <span className="gradient-text">с грунтовочным эффектом</span>
              </h2>
              
              <div className="bg-[var(--surface-blue)] p-3 rounded-lg text-sm text-[var(--text-primary)] touch-manipulation active:scale-95 transition-transform">
                <div className="font-semibold mb-1">Условия акции:</div>
                <div>• Купите 3 упаковки по цене 39.99 BYN</div>
                <div>• Получите 4-ю упаковку бесплатно</div>
                <div>• Итого: 4 упаковки за 119.97 BYN вместо 319.96 BYN</div>
                <div className="font-bold text-[var(--accent-color)] mt-2">Экономия: 199.99 BYN!</div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6">Оформить заказ</h3>
                
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                  className="w-full px-3 py-3 sm:px-4 sm:py-3 text-base border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent touch-manipulation"
                  style={{ fontSize: '16px' }}
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Номер телефона"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                  className="w-full px-3 py-3 sm:px-4 sm:py-3 text-base border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent touch-manipulation"
                  style={{ fontSize: '16px' }}
                />
              </div>
              
              <div 
                className="flex items-start gap-2 sm:gap-3 active:scale-95 transition-transform touch-manipulation p-2 rounded-lg"
                onClick={() => setFormData(prev => ({ ...prev, agreed: !prev.agreed }))}
              >
                <input
                  type="checkbox"
                  name="agreed"
                  id="agreed"
                  checked={formData.agreed}
                  onChange={handleInputChange}
                  className="mt-1 rounded border-[var(--border)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                />
                <label htmlFor="agreed" className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  Я согласен с политикой конфиденциальности и пользовательским соглашением
                </label>
              </div>
                
              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.phone || !formData.agreed}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-transform touch-manipulation py-4 text-lg font-semibold"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Отправляем заказ...
                  </span>
                ) : (
                  'Заказать сейчас'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('OrderSection component error:', error);
    return null;
  }
}