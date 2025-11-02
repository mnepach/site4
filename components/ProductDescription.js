function ProductDescription() {
  try {
    return (
      <section
        id="description"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-[var(--surface-blue)]"
        data-name="product-description"
        data-file="components/ProductDescription.js"
      >
        <div className="mobile-container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">О продукте</h2>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Узнайте, почему MetalGuard — это лучшее решение для защиты металла от коррозии
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Применение преобразователя" 
                className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
            
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--primary-color)] cursor-pointer hover:scale-105">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-3">
                  Инновационная формула
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed">
                  MetalGuard химически преобразует ржавчину в прочное защитное покрытие, устраняя необходимость в сложной механической зачистке.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--accent-color)] cursor-pointer hover:scale-105">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-3">
                  Универсальность
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed">
                  Подходит для кузовов автомобилей, труб, металлических конструкций и других поверхностей.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--primary-color)] cursor-pointer hover:scale-105">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-3">
                  Долговременная защита
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed">
                  Эффективно борется даже с глубокой коррозией, продлевая срок службы металла на годы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProductDescription component error:', error);
    return null;
  }
}