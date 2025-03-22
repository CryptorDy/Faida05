import React, { useEffect, useState } from 'react';
// @ts-ignore - В версии react-router-dom 7.x типы могут отличаться от фактических экспортов
import { Link } from 'react-router-dom';
import { ShoppingBag, CreditCard, Phone, Clock, Shield, Calculator, ArrowRight, Tag } from 'lucide-react';
import MainPageCalculator from '../components/MainPageCalculator';
import { ApiService } from '../services/api';
import { Product } from '../types/api';

const HomePage: React.FC = () => {
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        setLoading(true);
        const products = await ApiService.getPopularProductsAsync();
        setPopularProducts(products);
        setError(null);
      } catch (err) {
        console.error('Ошибка при загрузке популярных товаров:', err);
        setError('Не удалось загрузить популярные товары. Пожалуйста, попробуйте позже.');
      } finally {
        setLoading(false);
      }
    };

    fetchPopularProducts();
  }, []);

  // Функция для расчета ежемесячного платежа
  const calculateMonthlyPayment = (price: number, months: number = 9) => {
    return Math.ceil(price / months);
  };

  return (
    <div>
      {/* Hero section */}
      <div className="bg-[#4A56E2] text-white">
        <section class="bg-gradient-to-br from-indigo-600 to-blue-700 text-white py-16 md:py-20">
            <div class="container mx-auto px-4">
              <div class="max-w-3xl">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Покупайте технику в рассрочку</h1>
                <p class="text-xl md:text-2xl mb-8 text-indigo-100">Выбирайте из товаров и платите удобными ежемесячными платежами без скрытых комиссий в соответствии с нормами Шариата</p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <a class="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium text-lg inline-flex items-center justify-center" href="/catalog" data-discover="true">Перейти в каталог<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-5 w-5">
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                  </a>
                </div>
              </div>
            </div>
        </section>
      </div>

      {/* Calculator section */}
      <div className="bg-gray-50 py-12 w-full" id="calculator">
        <div className="container mx-auto px-4">
          <div className="mt-8 w-full">
            <MainPageCalculator />
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Выгодные условия</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <CreditCard className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Без скрытых комиссий</h3>
            <p className="text-gray-600">Прозрачные условия без дополнительных платежей и скрытых комиссий.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Clock className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Выгодные условия</h3>
            <p className="text-gray-600">Рассрочка от 1 до 9 месяцев с минимальной переплатой</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Shield className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Быстрое оформление</h3>
            <p className="text-gray-600">Оформление рассрочки по одному документу за 15 минут</p>
          </div>
        </div>
      </div>

      {/* Popular products section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#1E293B] mx-auto">Популярные товары</h2>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
            {error}
          </div>
        )}

        {!loading && !error && popularProducts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            В данный момент нет популярных товаров
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {!loading && popularProducts.map((product) => (
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
      </div>

      {/* Info section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Купить товары можно и в офисе</h2>
            <p className="mb-8 text-gray-600">Мы находимся по адресу: г. Махачкала, ул. Коркмасова 5</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm">
                <Phone className="h-6 w-6 text-indigo-600 mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Телефон</div>
                  <div className="font-medium">+7 (963) 409-61-11</div>
                </div>
              </div>

              <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm">
                <Clock className="h-6 w-6 text-indigo-600 mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Время работы</div>
                  <div className="font-medium">10:00 - 19:00 (Пн-Сб)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
