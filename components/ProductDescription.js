function ProductDescription() {
  try {
    return (
      <section id="description" className="py-8 sm:py-12 bg-white/50 backdrop-blur-sm" data-name="product-description" data-file="components/ProductDescription.js">
        <div className="mobile-container">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Описание</h2>
          </div>
          
          <div className="mb-6 sm:mb-8">
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Применение преобразователя" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          
          <div className="text-center sm:text-left">
            <p className="text-[var(--text-secondary)] mb-6 text-sm sm:text-base">
              Инновационный преобразователь ржавчины с функцией грунтовки химически реагирует с коррозией, превращая её в прочное защитное покрытие. Не требует механической зачистки перед нанесением, создаёт идеальную основу для последующей покраски. Подходит для обработки кузовов автомобилей, металлических конструкций, труб и других поверхностей. Эффективно работает даже с глубокой коррозией, значительно продлевая срок службы металлических изделий.
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProductDescription component error:', error);
    return null;
  }
}
