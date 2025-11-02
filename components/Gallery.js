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

    return (
      <section
        id="gallery"
        className="py-8 sm:py-12 bg-gradient-to-b from-white to-[var(--surface-blue)]"
        data-name="gallery"
        data-file="components/Gallery.js"
      >
        <div className="mobile-container">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Фото товара</h2>
          </div>
          
          <div className="mb-4 sm:hidden">
            <img 
              src={images[activeImage].url} 
              alt={images[activeImage].alt}
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`overflow-hidden rounded-lg shadow-md transition-all duration-300 touch-manipulation ${
                  activeImage === index ? 'ring-2 ring-[var(--accent-color)] scale-105' : ''
                }`}
                onClick={() => handleImageTap(index)}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-32 sm:h-40 object-cover active:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 sm:hidden">
            <div className="flex space-x-2">
              {images.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeImage === index ? 'bg-[var(--accent-color)]' : 'bg-gray-300'
                  }`}
                ></div>
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