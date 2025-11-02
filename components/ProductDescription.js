function ProductDescription() {
  try {
    return (
      <section
        id="description"
        className="py-8 sm:py-12 bg-white"
        data-name="product-description"
        data-file="components/ProductDescription.js"
      >
        <div className="mobile-container">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-3">О продукте</h2>
            <p className="text-base text-[var(--text-secondary)] max-w-xl mx-auto">
              Узнайте, почему MetalGuard — это лучшее решение для защиты металла от коррозии
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Применение преобразователя" 
                className="w-full rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            
            <div className="space-y-4 sm:space-y-5">
              <div className="bg-white border border-[var(--border)] rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  Инновационная формула
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  MetalGuard химически преобразует ржавчину в прочное защитное покрытие, устраняя необходимость в сложной механической зачистке.
                </p>
              </div>
              
              <div className="bg-white border border-[var(--border)] rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  Универсальность
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Подходит для кузовов автомобилей, труб, металлических конструкций и других поверхностей.
                </p>
              </div>
              
              <div className="bg-white border border-[var(--border)] rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  Долговременная защита
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
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