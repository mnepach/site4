function Gallery() {
  try {
    const images = [
      {
        url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        alt: 'Преобразователь ржавчины'
      },
      {
        url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        alt: 'Применение на металле'
      },
      {
        url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        alt: 'Результат применения'
      },
      {
        url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        alt: 'Защитное покрытие'
      }
    ];

    const [activeImage, setActiveImage] = React.useState(0);

    const handleImageTap = (index) => {
      setActiveImage(index);
    };

    return (
      <section
        id="gallery"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[var(--surface-blue)] to-white"
        data-name="gallery"
        data-file="components/Gallery.js"
      >
        <div className="mobile-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-primary)]">Фото товара</h2>
              <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Посмотрите, как выглядит продукт
              </p>
            </div>
            
            {/* Mobile: Large active image + thumbnails */}
            <div className="lg:hidden">
              <div className="mb-6">
                <img 
                  src={images[activeImage].url} 
                  alt={images[activeImage].alt}
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-4">
                {images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`overflow-hidden rounded-xl shadow-lg transition-all duration-300 touch-manipulation cursor-pointer ${
                      activeImage === index ? 'ring-4 ring-[var(--primary-color)] scale-105' : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => handleImageTap(index)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-20 sm:h-24 object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <div className="flex space-x-2">
                  {images.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeImage === index ? 'bg-[var(--primary-color)] w-8' : 'bg-gray-300'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop: Grid of equal-sized images */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-6">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="group overflow-hidden rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => handleImageTap(index)}
                >
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Gallery component error:', error);
    return null;
  }
}