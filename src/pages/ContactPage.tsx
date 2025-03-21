import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Контакты</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact information */}
        <div>
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">Наши контакты</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium">Телефон</h3>
                  <a href="tel:+79001234567" className="text-indigo-600 hover:underline">+7 (900) 123-45-67</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:info@example.ru" className="text-indigo-600 hover:underline">info@example.ru</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <Clock className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium">Режим работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <MessageSquare className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium">Мессенджеры</h3>
                  <div className="flex space-x-3 mt-2">
                    <a 
                      href="https://wa.me/+79001234567" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                    <a 
                      href="https://t.me/example" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Часто задаваемые вопросы</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Как оформить рассрочку?</h3>
                <p className="text-gray-600">Выберите товар, нажмите кнопку "Оформить в рассрочку" и заполните заявку.</p>
              </div>
              
              <div>
                <h3 className="font-medium">Какие документы нужны для оформления?</h3>
                <p className="text-gray-600">Для оформления рассрочки достаточно паспорта гражданина РФ.</p>
              </div>
              
              <div>
                <h3 className="font-medium">Как происходит оплата рассрочки?</h3>
                <p className="text-gray-600">Оплата производится ежемесячно равными платежами через личный кабинет или банковской картой.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact form */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Напишите нам</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Иван Иванов"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="example@mail.ru"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
              <input 
                type="tel" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="+7 (999) 123-45-67"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
              <textarea 
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Ваше сообщение..."
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="consent" 
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                Я согласен на обработку персональных данных
              </label>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium"
            >
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
      
      {/* Map */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Мы на карте</h2>
        <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Здесь будет карта с расположением офиса</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
