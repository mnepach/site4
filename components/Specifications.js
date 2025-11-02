function Specifications() {
  try {
    const specs = [
      {
        icon: 'beaker',
        title: 'Тип',
        value: 'преобразователь+грунтовка'
      },
      {
        icon: 'clock',
        title: 'Время высыхания',
        value: '30-60 минут'
      },
      {
        icon: 'palette',
        title: 'Под покраску',
        value: 'алкидные/акриловые краски'
      },
      {
        icon: 'factory',
        title: 'Применение',
        value: 'авто, трубы, конструкции'
      }
    ];

    return (
      <section
        className="py-12 sm:py-16 lg:py-20 bg-white"
        data-name="specifications"
        data-file="components/Specifications.js"
      >
        <div className="mobile-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-primary)]">Характеристики</h2>
              <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Технические параметры продукта
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Технические характеристики" 
                  className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="space-y-4 sm:space-y-5 order-1 lg:order-2">
                {specs.map((spec, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 sm:p-5 bg-gradient-to-r from-[var(--surface-blue)] to-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-[var(--primary-color)]/20">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl water-bg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <div className={`icon-${spec.icon} text-lg sm:text-xl lg:text-2xl text-white`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm sm:text-base lg:text-lg">
                        <span className="font-bold text-[var(--text-primary)]">{spec.title}:</span>
                        <span className="ml-2 text-[var(--text-secondary)]">{spec.value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Specifications component error:', error);
    return null;
  }
}