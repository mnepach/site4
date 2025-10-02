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
      
      // Simulate order submission
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

    return (
      <section id="order" className="py-8 sm:py-12 water-bg" data-name="order-section" data-file="components/OrderSection.js">
        <div className="mobile-container">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/50">
            <div className="text-center mb-6 sm:mb-8">
              <div className="promotion-badge mb-4">
                🔥 АКЦИЯ 3+1 = ЧЕТВЁРТЫЙ В ПОДАРОК!
              </div>
              
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-xl water-bg flex items-center justify-center shadow-lg">
                <div className="icon-shield-check text-2xl sm:text-3xl text-white"></div>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[var(--text-primary)]">
                Преобразователь ржавчины <span className="gradient-text">с грунтовочным эффектом</span>
              </h2>
              
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6">
                Инновационное решение: превращает ржавчину в защитный слой за один шаг
              </p>
              
              <div className="glass-card p-4 mb-4">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-2">
                  <span className="text-[var(--text-secondary)] line-through text-lg sm:text-xl">80 BYN</span>
                  <span className="text-2xl sm:text-3xl font-bold text-[var(--accent-color)]">39.99 BYN</span>
                  <span className="discount-badge">-50%</span>
                </div>
                <div className="text-sm text-[var(--text-secondary)] font-semibold">
                  При покупке 3 шт. - 4-я упаковка в подарок!
                </div>
              </div>
              
              <div className="bg-[var(--surface-blue)] p-3 rounded-lg text-sm text-[var(--text-primary)]">
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
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Номер телефона"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                />
              </div>
              
              <div className="flex items-start gap-2 sm:gap-3">
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
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Отправляем заказ...
                  </span>
                ) : (
                  'Заказать'
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
