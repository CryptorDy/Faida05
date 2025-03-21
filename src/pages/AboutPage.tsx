import React from 'react';
import { Shield, Award, Users, Check } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Заголовок страницы */}
      <div className="bg-[#4A56E2] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">О компании Faida</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Мы делаем покупки доступными с помощью беспроцентной рассрочки, 
            которая соответствует нормам Шариата
          </p>
        </div>
      </div>
      
      {/* Основная информация */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Наша миссия</h2>
            <p className="text-[#64748B] mb-4">
              Компания Faida была основана в 2020 году с целью предоставить потребителям удобный и выгодный способ 
              совершать покупки в рассрочку без скрытых комиссий и процентов, в соответствии с исламскими финансовыми принципами.
            </p>
            <p className="text-[#64748B] mb-4">
              Мы стремимся сделать рассрочку доступной каждому, кто хочет приобрести необходимые товары, 
              но не может или не хочет оплачивать их полную стоимость сразу.
            </p>
            <p className="text-[#64748B]">
              Наша команда профессионалов работает над постоянным улучшением сервиса, 
              чтобы сделать процесс покупки максимально простым и удобным для каждого клиента.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
              alt="Команда Faida" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
        
        {/* Преимущества */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-10 text-center">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-[#F0F1FF] rounded-full flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-[#4A56E2]" />
              </div>
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Беспроцентная рассрочка</h3>
              <p className="text-[#64748B]">Мы не взимаем проценты и скрытые комиссии за пользование рассрочкой</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-[#F0F1FF] rounded-full flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-[#4A56E2]" />
              </div>
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Соответствие нормам Шариата</h3>
              <p className="text-[#64748B]">Наш сервис работает в соответствии с исламскими финансовыми принципами</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-[#F0F1FF] rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-[#4A56E2]" />
              </div>
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Индивидуальный подход</h3>
              <p className="text-[#64748B]">Мы предлагаем персональные условия рассрочки для каждого клиента</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-[#F0F1FF] rounded-full flex items-center justify-center mb-4">
                <Check className="w-7 h-7 text-[#4A56E2]" />
              </div>
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Простое оформление</h3>
              <p className="text-[#64748B]">Минимум документов и быстрое одобрение заявки в течение нескольких минут</p>
            </div>
          </div>
        </div>
        
        {/* Как работает рассрочка */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-10 text-center">Как работает рассрочка Faida</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#4A56E2] text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <img 
                src="https://via.placeholder.com/150" 
                alt="Выбор товара" 
                className="w-20 h-20 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Выберите товар</h3>
              <p className="text-[#64748B] text-sm">Выберите товар из нашего каталога или у партнеров</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#4A56E2] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <img 
                src="https://via.placeholder.com/150" 
                alt="Оформление заявки" 
                className="w-20 h-20 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Оформите заявку</h3>
              <p className="text-[#64748B] text-sm">Заполните заявку онлайн или в офисе компании</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#4A56E2] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <img 
                src="https://via.placeholder.com/150" 
                alt="Получение товара" 
                className="w-20 h-20 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Получите товар</h3>
              <p className="text-[#64748B] text-sm">После одобрения заявки получите товар</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#4A56E2] text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <img 
                src="https://via.placeholder.com/150" 
                alt="Оплата" 
                className="w-20 h-20 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Платите по графику</h3>
              <p className="text-[#64748B] text-sm">Вносите платежи по установленному графику</p>
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-[#1E293B] mb-10 text-center">Часто задаваемые вопросы</h2>
          <div className="bg-white rounded-xl shadow-sm p-6 divide-y divide-gray-200">
            <div className="py-4">
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Какие документы нужны для оформления рассрочки?</h3>
              <p className="text-[#64748B]">Для оформления рассрочки вам понадобится только паспорт гражданина РФ. В некоторых случаях может потребоваться второй документ (СНИЛС, ИНН, водительское удостоверение).</p>
            </div>
            
            <div className="py-4">
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Как происходит оплата по рассрочке?</h3>
              <p className="text-[#64748B]">Оплата производится ежемесячно равными платежами через личный кабинет на сайте, в мобильном приложении или банковской картой в офисе компании.</p>
            </div>
            
            <div className="py-4">
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Можно ли досрочно погасить рассрочку?</h3>
              <p className="text-[#64748B]">Да, вы можете в любой момент досрочно погасить рассрочку без каких-либо штрафов и комиссий.</p>
            </div>
            
            <div className="py-4">
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Что будет, если я пропущу платеж?</h3>
              <p className="text-[#64748B]">В случае пропуска платежа мы свяжемся с вами для выяснения причин и предложим варианты решения ситуации. Мы всегда идем навстречу нашим клиентам и готовы находить индивидуальные решения.</p>
            </div>
            
            <div className="py-4">
              <h3 className="text-lg font-medium text-[#1E293B] mb-2">Какие товары можно приобрести в рассрочку?</h3>
              <p className="text-[#64748B]">В рассрочку можно приобрести широкий ассортимент товаров: электронику, бытовую технику, мебель, одежду и многое другое. Полный список категорий представлен в нашем каталоге.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="bg-[#4A56E2] text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Готовы оформить рассрочку?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Выберите товар из нашего каталога или свяжитесь с нами, чтобы узнать больше о условиях рассрочки.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/catalog" 
              className="px-6 py-3 bg-white text-[#4A56E2] rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Перейти в каталог
            </a>
            <a 
              href="/contact" 
              className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 