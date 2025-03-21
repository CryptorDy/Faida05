import React from 'react';
// @ts-ignore - В версии react-router-dom 7.x типы могут отличаться от фактических экспортов
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, User, ShoppingCart } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

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
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <a href="https://wa.me/79634096111" className="text-gray-400 hover:text-white">WhatsApp</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white text-sm">Информация</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-400 hover:text-white">О компании</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white">Политика конфиденциальности</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white">Пользовательское соглашение</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
            <p>© 2023 FAIDA. Все права защищены.</p>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
