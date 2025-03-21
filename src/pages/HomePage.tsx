import React from 'react';
// @ts-ignore - В версии react-router-dom 7.x типы могут отличаться от фактических экспортов
import { Link } from 'react-router-dom';
import { ShoppingBag, CreditCard, Phone, Clock, Shield, Calculator } from 'lucide-react';
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
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" 
                alt="Покупки в рассрочку" 
                className="rounded-xl shadow-lg h-96 w-full object-cover"
              />
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
            <h3 className="text-xl font-semibold mb-2">Быстрое оформление</h3>
            <p className="text-gray-600">Оформление рассрочки занимает всего несколько минут, минимум документов.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Shield className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Надежная защита</h3>
            <p className="text-gray-600">Ваши данные надежно защищены современными технологиями шифрования.</p>
          </div>
        </div>
      </div>
      
      {/* Popular products section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1E293B]">Популярные товары</h2>
          <Link 
            to="/catalog" 
            className="text-[#4A56E2] hover:text-[#3D47B3] transition-colors flex items-center text-sm font-medium"
          >
            Все товары 
            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* iPhone 13 Pro Max */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="relative">
              <div className="absolute top-2 left-2 bg-[#F0F1FF] text-[#4A56E2] text-xs px-2 py-1 rounded-full font-medium">
                Смартфоны
              </div>
              <img 
                src="https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80" 
                alt="iPhone 13 Pro Max" 
                className="w-full h-44 object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-base font-medium text-[#1E293B] line-clamp-1 mb-1">iPhone 13 Pro Max 256GB</h3>
              <p className="text-[#64748B] text-xs mb-2 line-clamp-2 h-8">Мощный смартфон с отличной камерой и производительностью</p>
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold text-[#1E293B]">129 990 ₽</div>
                <div className="bg-[#F0F1FF] text-[#4A56E2] text-xs px-2 py-1 rounded font-medium">
                  Рассрочка
                </div>
              </div>
            </div>
          </div>
          
          {/* Samsung Galaxy S22 Ultra */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="relative">
              <div className="absolute top-2 left-2 bg-[#F0F1FF] text-[#4A56E2] text-xs px-2 py-1 rounded-full font-medium">
                Смартфоны
              </div>
              <img 
                src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Samsung Galaxy S22 Ultra" 
                className="w-full h-44 object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-base font-medium text-[#1E293B] line-clamp-1 mb-1">Samsung Galaxy S22 Ultra 512GB</h3>
              <p className="text-[#64748B] text-xs mb-2 line-clamp-2 h-8">Флагманский смартфон с поддержкой S Pen и мощной камерой</p>
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold text-[#1E293B]">119 990 ₽</div>
                <div className="bg-[#F0F1FF] text-[#4A56E2] text-xs px-2 py-1 rounded font-medium">
                  Рассрочка
                </div>
              </div>
            </div>
          </div>
          
          {/* MacBook Pro */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="relative">
              <div className="absolute top-2 left-2 bg-[#F0F1FF] text-[#4A56E2] text-xs px-2 py-1 rounded-full font-medium">
                Ноутбуки
              </div>
              <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80" 
                alt="MacBook Pro" 
                className="w-full h-44 object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-base font-medium text-[#1E293B] line-clamp-1 mb-1">MacBook Pro 14" M1 Pro</h3>
              <p className="text-[#64748B] text-xs mb-2 line-clamp-2 h-8">Профессиональный ноутбук с революционным процессором M1 Pro</p>
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold text-[#1E293B]">189 990 ₽</div>
                <div className="bg-[#F0F1FF] text-[#4A56E2] text-xs px-2 py-1 rounded font-medium">
                  Рассрочка
                </div>
              </div>
            </div>
          </div>
          
          {/* Dell XPS 15 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="relative">
              <div className="absolute top-2 left-2 bg-[#F0F1FF] text-[#4A56E2] text-xs px-2 py-1 rounded-full font-medium">
                Ноутбуки
              </div>
              <img 
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                alt="Dell XPS 15" 
                className="w-full h-44 object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-base font-medium text-[#1E293B] line-clamp-1 mb-1">Dell XPS 15 9520</h3>
              <p className="text-[#64748B] text-xs mb-2 line-clamp-2 h-8">Премиальный ноутбук с мощным процессором и отличным дисплеем</p>
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold text-[#1E293B]">159 990 ₽</div>
                <div className="bg-[#F0F1FF] text-[#4A56E2] text-xs px-2 py-1 rounded font-medium">
                  Рассрочка
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div className="bg-gradient-to-r from-[#F0F1FF] to-[#F8F9FF] py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#1E293B] mb-8">Преимущества рассрочки Faida</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm text-center">
              <div className="w-14 h-14 bg-[#F0F1FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4A56E2]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Без переплаты</h3>
              <p className="text-[#64748B] text-sm">Купите товар в рассрочку без переплаты и скрытых комиссий</p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm text-center">
              <div className="w-14 h-14 bg-[#F0F1FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4A56E2]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Быстрое оформление</h3>
              <p className="text-[#64748B] text-sm">Минимум документов и быстрое одобрение за 5 минут</p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm text-center">
              <div className="w-14 h-14 bg-[#F0F1FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4A56E2]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Безопасно</h3>
              <p className="text-[#64748B] text-sm">Защита персональных данных и безопасные платежи</p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm text-center">
              <div className="w-14 h-14 bg-[#F0F1FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4A56E2]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Гибкие условия</h3>
              <p className="text-[#64748B] text-sm">Выбирайте срок рассрочки и сумму первоначального взноса</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* About company section */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#1E293B] mb-4">О компании Faida</h2>
            <p className="text-[#64748B] mb-4">
              Faida — современный сервис рассрочки, который помогает совершать покупки удобно и выгодно. 
              Мы предлагаем прозрачные условия без скрытых комиссий и переплат.
            </p>
            <p className="text-[#64748B] mb-6">
              Оформляйте рассрочку на срок от 1 до 9 месяцев с возможностью выбрать комфортный первоначальный взнос. 
              Широкий выбор товаров от популярных брендов доступен в нашем каталоге.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center px-4 py-2 bg-[#4A56E2] text-white rounded-lg hover:bg-[#3D47B3] transition-colors text-sm font-medium"
            >
              Подробнее о нас
              <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
              alt="Команда Faida" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Footer call to action */}
      <div className="bg-[#4A56E2] text-white py-10 mt-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Готовы оформить рассрочку?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Просто выберите товар из нашего каталога или используйте калькулятор рассрочки, 
            чтобы рассчитать ежемесячный платеж и оформить заявку.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/catalog" 
              className="px-6 py-3 bg-white text-[#4A56E2] rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Перейти в каталог
            </Link>
            <a 
              href="#calculator" 
              className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
            >
              Рассчитать рассрочку
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
