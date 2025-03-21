import React from 'react';
import { Shield, Award, Users, Check, ShoppingBag, FileText, Package, CreditCard } from 'lucide-react';
// @ts-ignore - В версии react-router-dom 7.x типы могут отличаться от фактических экспортов
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Заголовок страницы с градиентным фоном */}
      <div className="bg-gradient-to-r from-[#4A56E2] to-[#9333ea] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О компании Faida</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Мы делаем покупки доступными с помощью беспроцентной рассрочки, 
              которая соответствует нормам Шариата
            </p>
          </div>
        </div>
      </div>
      
      {/* Основная информация */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">Наша миссия</h2>
            <div className="space-y-6">
              <p className="text-[#64748B] text-lg leading-relaxed">
                Компания Faida была основана в 2020 году с целью предоставить потребителям удобный и выгодный способ 
                совершать покупки в рассрочку без скрытых комиссий и процентов, в соответствии с исламскими финансовыми принципами.
              </p>
              <p className="text-[#64748B] text-lg leading-relaxed">
                Мы стремимся сделать рассрочку доступной каждому, кто хочет приобрести необходимые товары, 
                но не может или не хочет оплачивать их полную стоимость сразу.
              </p>
              <p className="text-[#64748B] text-lg leading-relaxed">
                Наша команда профессионалов работает над постоянным улучшением сервиса, 
                чтобы сделать процесс покупки максимально простым и удобным для каждого клиента.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
              alt="Команда Faida" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
        
        {/* Преимущества */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-10 text-center">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#F0F1FF] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-[#4A56E2]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4 text-center">Беспроцентная рассрочка</h3>
              <p className="text-[#64748B] text-center">Мы не взимаем проценты и скрытые комиссии за пользование рассрочкой</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#F0F1FF] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="w-8 h-8 text-[#4A56E2]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4 text-center">Соответствие нормам Шариата</h3>
              <p className="text-[#64748B] text-center">Наш сервис работает в соответствии с исламскими финансовыми принципами</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#F0F1FF] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-[#4A56E2]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4 text-center">Индивидуальный подход</h3>
              <p className="text-[#64748B] text-center">Мы предлагаем персональные условия рассрочки для каждого клиента</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#F0F1FF] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Check className="w-8 h-8 text-[#4A56E2]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4 text-center">Простое оформление</h3>
              <p className="text-[#64748B] text-center">Минимум документов и быстрое одобрение заявки в течение нескольких минут</p>
            </div>
          </div>
        </div>
        
        {/* Как работает рассрочка */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-10 text-center">Как работает рассрочка Faida</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#4A56E2] text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="w-20 h-20 bg-[#F0F1FF] rounded-full flex items-center justify-center mb-6 mx-auto mt-6">
                <ShoppingBag className="w-10 h-10 text-[#4A56E2]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Выберите товар</h3>
              <p className="text-[#64748B]">Выберите товар из нашего каталога или у партнеров</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#4A56E2] text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="w-20 h-20 bg-[#F0F1FF] rounded-full flex items-center justify-center mb-6 mx-auto mt-6">
                <FileText className="w-10 h-10 text-[#4A56E2]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Оформите заявку</h3>
              <p className="text-[#64748B]">Заполните заявку онлайн или в офисе компании</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#4A56E2] text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="w-20 h-20 bg-[#F0F1FF] rounded-full flex items-center justify-center mb-6 mx-auto mt-6">
                <Package className="w-10 h-10 text-[#4A56E2]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Получите товар</h3>
              <p className="text-[#64748B]">После одобрения заявки получите товар</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#4A56E2] text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div className="w-20 h-20 bg-[#F0F1FF] rounded-full flex items-center justify-center mb-6 mx-auto mt-6">
                <CreditCard className="w-10 h-10 text-[#4A56E2]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Платите по графику</h3>
              <p className="text-[#64748B]">Вносите платежи по установленному графику</p>
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-10 text-center">Часто задаваемые вопросы</h2>
          <div className="bg-white rounded-2xl shadow-md p-8 divide-y divide-gray-200 max-w-4xl mx-auto">
            <div className="py-6">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">Какие документы нужны для оформления рассрочки?</h3>
              <p className="text-[#64748B] text-lg">Для оформления рассрочки вам понадобится только паспорт гражданина РФ. В некоторых случаях может потребоваться второй документ (СНИЛС, ИНН, водительское удостоверение).</p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">Как происходит оплата по рассрочке?</h3>
              <p className="text-[#64748B] text-lg">Оплата производится ежемесячно равными платежами через личный кабинет на сайте, в мобильном приложении или банковской картой в офисе компании.</p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">Можно ли досрочно погасить рассрочку?</h3>
              <p className="text-[#64748B] text-lg">Да, вы можете в любой момент досрочно погасить рассрочку без каких-либо штрафов и комиссий.</p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">Что будет, если я пропущу платеж?</h3>
              <p className="text-[#64748B] text-lg">В случае пропуска платежа мы свяжемся с вами для выяснения причин и предложим варианты решения ситуации. Мы всегда идем навстречу нашим клиентам и готовы находить индивидуальные решения.</p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">Какие товары можно приобрести в рассрочку?</h3>
              <p className="text-[#64748B] text-lg">В рассрочку можно приобрести широкий ассортимент товаров: электронику, бытовую технику, мебель, одежду и многое другое. Полный список категорий представлен в нашем каталоге.</p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="bg-gradient-to-r from-[#4A56E2] to-[#9333ea] text-white py-12 px-6 rounded-3xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Готовы оформить рассрочку?</h2>
            <p className="text-white/90 text-xl mx-auto mb-8 leading-relaxed">
              Выберите товар из нашего каталога или свяжитесь с нами, чтобы узнать больше о условиях рассрочки.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/catalog" 
                className="px-8 py-4 bg-white text-[#4A56E2] rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                Перейти в каталог
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 