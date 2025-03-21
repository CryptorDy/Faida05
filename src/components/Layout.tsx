import React from 'react';
// @ts-ignore - В версии react-router-dom 7.x типы могут отличаться от фактических экспортов
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, User, ShoppingCart } from 'lucide-react';

const Layout: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-[#4A56E2]">
              FAIDA
            </Link>
            
            {/* Desktop Navigation */}
            <div className="flex items-center space-x-6">
              <nav className="flex space-x-6">
                <Link 
                  to="/catalog" 
                  className={`font-medium flex items-center text-sm ${isActive('/catalog') ? 'text-[#4A56E2]' : 'text-[#475569] hover:text-[#4A56E2]'}`}
                >
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Каталог
                </Link>
                <Link 
                  to="/contact" 
                  className={`font-medium flex items-center text-sm ${isActive('/contact') ? 'text-[#4A56E2]' : 'text-[#475569] hover:text-[#4A56E2]'}`}
                >
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9978 21.4142 21.3729C21.0391 21.7479 20.5117 21.9586 19.96 21.96C17.4223 21.7383 14.9575 20.9051 12.76 19.52C10.7115 18.2396 8.9431 16.4712 7.66 14.42C6.27155 12.2093 5.43739 9.73074 5.22 7.18C5.22144 6.62982 5.43065 6.10346 5.80476 5.72935C6.17888 5.35523 6.70524 5.14603 7.25542 5.14459H10.26C10.712 5.14003 11.1508 5.29906 11.4925 5.58964C11.8342 5.88022 12.0554 6.28469 12.11 6.73C12.2366 7.70713 12.4659 8.66697 12.79 9.59C12.9221 9.95802 12.9338 10.356 12.8236 10.7313C12.7133 11.1065 12.4859 11.4406 12.17 11.69L11.07 12.79C12.2582 14.9139 14.0861 16.7418 16.21 17.93L17.31 16.83C17.5594 16.5141 17.8935 16.2867 18.2687 16.1764C18.644 16.0662 19.042 16.0779 19.41 16.21C20.3339 16.5337 21.2947 16.763 22.27 16.89C22.7202 16.9439 23.1291 17.1669 23.4198 17.5122C23.7104 17.8574 23.8662 18.3004 23.85 18.76L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Контакты
                </Link>
              </nav>
              <div className="flex items-center space-x-3">
                <a 
                  href="tel:+79634096111" 
                  className="text-[#4A56E2] font-medium text-sm hover:text-[#3D47B3] hidden md:flex items-center"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  +7 (963) 409-61-11
                </a>
                <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
                <button className="text-[#475569] hover:text-[#4A56E2]">
                  <User className="h-5 w-5" />
                </button>
                <button className="text-[#475569] hover:text-[#4A56E2] relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-[#4A56E2] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow bg-gray-50">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">FAIDA</h3>
              <p className="text-gray-400 text-sm">
                Современный сервис рассрочки для удобных покупок без переплат и скрытых комиссий.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white text-sm">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-400 hover:text-white">Главная</Link></li>
                <li><Link to="/catalog" className="text-gray-400 hover:text-white">Каталог</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white text-sm">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@faida.ru" className="text-gray-400 hover:text-white">info@faida.ru</a>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+79634096111" className="text-gray-400 hover:text-white">+7 (963) 409-61-11</a>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">г. Махачкала, ул. Коркмасова, 12</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <a href="https://t.me/faida" className="text-gray-400 hover:text-white">Telegram</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white text-sm">Информация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">О компании</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Условия рассрочки</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Политика конфиденциальности</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Пользовательское соглашение</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
            <p>© 2023 FAIDA. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
