function Features() {
  try {
    const features = [
      {
        icon: 'refresh-ccw',
        title: 'Преобразование',
        description: 'Ржавчина в защитный слой.'
      },
      {
        icon: 'shield-check',
        title: 'Защита',
        description: 'Долговременный антикоррозийный эффект.'
      },
      {
        icon: 'palette',
        title: 'Грунтовка',
        description: 'Готовое основание под покраску.'
      },
      {
        icon: 'wrench',
        title: 'Универсальность',
        description: 'Для всех типов металла.'
      }
    ];

    const handleFeatureTap = (index) => {
      console.log('Feature tapped:', index);
    };

    return (
      <section
        id="features"
        className="py-12 sm:py-16 lg:py-20 bg-white"
        data-name="features"
        data-file="components/Features.js"
      >
        <div className="mobile-container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[var(--text-primary)]">
              Преимущества <span className="gradient-text">MetalGuard</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Профессиональное решение для защиты металла от коррозии
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card text-center group cursor-pointer"
                onClick={() => handleFeatureTap(index)}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 rounded-2xl water-bg flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <div className={`icon-${feature.icon} text-2xl sm:text-3xl lg:text-4xl text-white`}></div>
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-xs sm:text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}