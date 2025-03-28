import React from 'react';
// @ts-ignore - В версии react-router-dom 7.x типы могут отличаться от фактических экспортов
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, Clock } from 'lucide-react';
import { useProductsOptimized } from '../hooks/useProducts';

const CatalogPage: React.FC = () => {
  const { 
    products: displayProducts,
    categories, 
    loading, 
    error, 
    selectedCategoryId, 
    setSelectedCategoryId 
  } = useProductsOptimized();
  
  // Функция для расчета ежемесячного платежа
  const calculateMonthlyPayment = (price: number, months: number = 9) => {
    return Math.ceil(price / months);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 rounded-full w-32"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md h-96">
                <div className="h-56 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="bg-red-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-red-700 mb-2">Ошибка загрузки</h2>
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>
      
      {/* Categories */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategoryId === null 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategoryId(null)}
          >
            Все категории
          </button>
          
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategoryId === category.id 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategoryId(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayProducts.map(product => (
          <Link 
            key={product.id}
            to={`/product/${product.id}`}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
          >
            {/* Product image with overlay on hover */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                onError={(e) => {
                  // Fallback image if the product image fails to load
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Нет+изображения';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <span className="inline-flex items-center text-white font-medium">
                    Подробнее
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
              
              {/* Category badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                  <Tag className="h-3 w-3 mr-1" />
                  {product.categoryName || 'Товар'}
                </span>
              </div>
            </div>
            
            <div className="p-4 flex-grow flex flex-col">
              {/* Product name */}
              <h3 className="font-medium text-lg mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                {product.name}
              </h3>
              
              {/* Short description */}
              <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              
              {/* Price section */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-xl font-bold text-indigo-600">{product.price.toLocaleString('ru-RU')} ₽</div>
                  <div className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2 py-1 rounded">
                    Рассрочка
                  </div>
                </div>
                
                {/* Monthly payment */}
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1 text-indigo-400" />
                  от {calculateMonthlyPayment(product.price).toLocaleString('ru-RU')} ₽/мес на 9 мес
                </div>
              </div>
            </div>
            
            {/* CTA button */}
            <div className="px-4 pb-4">
              <div className="w-full py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium rounded-lg text-center transition-colors">
                Купить в рассрочку
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {displayProducts.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Товары не найдены</p>
          {selectedCategoryId !== null && (
            <button 
              onClick={() => setSelectedCategoryId(null)}
              className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Показать все товары
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
