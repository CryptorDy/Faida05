import React from 'react';
// @ts-ignore - В версии react-router-dom 7.x типы могут отличаться от фактических экспортов
import { Link } from 'react-router-dom';
import { ShoppingBag, CreditCard, Phone, Clock, Shield, Calculator, ArrowRight, Tag } from 'lucide-react';
import MainPageCalculator from '../components/MainPageCalculator';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="bg-[#4A56E2] text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Покупайте в рассрочку<br/>без переплаты</h1>
              <p className="text-lg mb-8 text-white/80">
                Выбирайте из товаров и платите удобными ежемесячными платежами без скрытых комиссий в соответствии с нормами Шариата
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/catalog" 
                  className="bg-white text-[#4A56E2] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-base inline-flex items-center justify-center transition-colors"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Перейти в каталог
                </Link>
                <a 
                  href="#calculator" 
                  className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium text-base inline-flex items-center justify-center transition-colors"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Рассчитать рассрочку
                </a>
              </div>
            </div>
          </div>
        </div>
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* iPhone 13 Pro Max */}
          <Link 
            to="/product/1"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
          >
            {/* Product image with overlay on hover */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80" 
                alt="iPhone 13 Pro Max" 
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
                  Смартфоны
                </span>
              </div>
            </div>
            
            <div className="p-4 flex-grow flex flex-col">
              {/* Product name */}
              <h3 className="font-medium text-lg mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                iPhone 13 Pro Max 256GB
              </h3>
              
              {/* Short description */}
              <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                Мощный смартфон с отличной камерой и производительностью
              </p>
              
              {/* Price section */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-xl font-bold text-indigo-600">129 990 ₽</div>
                  <div className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2 py-1 rounded">
                    Рассрочка
                  </div>
                </div>
                
                {/* Monthly payment */}
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1 text-indigo-400" />
                  от 14 444 ₽/мес на 9 мес
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
          
          {/* Samsung Galaxy S22 Ultra */}
          <Link 
            to="/product/2"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
          >
            {/* Product image with overlay on hover */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Samsung Galaxy S22 Ultra" 
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
                  Смартфоны
                </span>
              </div>
            </div>
            
            <div className="p-4 flex-grow flex flex-col">
              {/* Product name */}
              <h3 className="font-medium text-lg mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                Samsung Galaxy S22 Ultra 512GB
              </h3>
              
              {/* Short description */}
              <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                Флагманский смартфон с поддержкой S Pen и мощной камерой
              </p>
              
              {/* Price section */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-xl font-bold text-indigo-600">119 990 ₽</div>
                  <div className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2 py-1 rounded">
                    Рассрочка
                  </div>
                </div>
                
                {/* Monthly payment */}
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1 text-indigo-400" />
                  от 13 332 ₽/мес на 9 мес
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
          
          {/* MacBook Pro */}
          <Link 
            to="/product/3"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
          >
            {/* Product image with overlay on hover */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80" 
                alt="MacBook Pro" 
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
                  Ноутбуки
                </span>
              </div>
            </div>
            
            <div className="p-4 flex-grow flex flex-col">
              {/* Product name */}
              <h3 className="font-medium text-lg mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                MacBook Pro 14" M1 Pro
              </h3>
              
              {/* Short description */}
              <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                Профессиональный ноутбук с революционным процессором Apple M1 Pro
              </p>
              
              {/* Price section */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-xl font-bold text-indigo-600">189 990 ₽</div>
                  <div className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2 py-1 rounded">
                    Рассрочка
                  </div>
                </div>
                
                {/* Monthly payment */}
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1 text-indigo-400" />
                  от 21 110 ₽/мес на 9 мес
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
          
          {/* Dell XPS 15 */}
          <Link 
            to="/product/4"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
          >
            {/* Product image with overlay on hover */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                alt="Dell XPS 15" 
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
                  Ноутбуки
                </span>
              </div>
            </div>
            
            <div className="p-4 flex-grow flex flex-col">
              {/* Product name */}
              <h3 className="font-medium text-lg mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                Dell XPS 15 9520
              </h3>
              
              {/* Short description */}
              <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                Премиальный ноутбук с мощным процессором и отличным дисплеем
              </p>
              
              {/* Price section */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-xl font-bold text-indigo-600">159 990 ₽</div>
                  <div className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2 py-1 rounded">
                    Рассрочка
                  </div>
                </div>
                
                {/* Monthly payment */}
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1 text-indigo-400" />
                  от 17 777 ₽/мес на 9 мес
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
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/catalog" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
          >
            Перейти в каталог 
            <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
      </div>
      
      
    </div>
  );
};

export default HomePage;
