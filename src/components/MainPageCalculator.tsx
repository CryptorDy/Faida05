import React, { useState, useEffect } from 'react';
// @ts-ignore - В версии react-router-dom 7.x типы могут отличаться от фактических экспортов
import { Link } from 'react-router-dom';
import { CreditCard, Calendar, Shield } from 'lucide-react';

const MainPageCalculator: React.FC = () => {
  const [productPrice, setProductPrice] = useState(65000);
  const [initialPayment, setInitialPayment] = useState(16250);
  const [term, setTerm] = useState(6);
  
  // Расчет минимального первоначального взноса (25% от суммы товара)
  const minInitialPayment = Math.round(productPrice * 0.25);
  
  // Расчет всех платежей
  const calculatePayments = () => {
    // 1. Вычисляем ежемесячную наценку (3% в первый месяц, 2% во второй, 1% в третий и последующие месяцы)
    let totalMarkup = 0;
    
    for (let i = 1; i <= term; i++) {
      if (i === 1) {
        totalMarkup += (productPrice - initialPayment) * 0.03;
      } else if (i === 2) {
        totalMarkup += (productPrice - initialPayment) * 0.02;
      } else {
        totalMarkup += (productPrice - initialPayment) * 0.01;
      }
    }
    
    const roundedMarkup = Math.round(totalMarkup);
    const totalAmount = productPrice + roundedMarkup;
    const monthlyPayment = Math.round((productPrice - initialPayment + roundedMarkup) / term);
    
    return {
      markupAmount: roundedMarkup,
      totalAmount,
      monthlyPayment
    };
  };
  
  const { markupAmount, totalAmount, monthlyPayment } = calculatePayments();
  
  // Обработчик изменения стоимости товара через слайдер
  const handleProductPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    updateProductPrice(value);
  };

  // Обработчик изменения стоимости товара через поле ввода
  const handleProductPriceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const numValue = value ? parseInt(value) : 1000;
    updateProductPrice(Math.min(Math.max(numValue, 1000), 500000));
  };
  
  // Общая функция обновления стоимости товара
  const updateProductPrice = (value: number) => {
    const validatedPrice = Math.min(500000, Math.max(1000, value));
    setProductPrice(validatedPrice);
    
    // Корректируем первоначальный взнос, если он стал меньше минимального
    const newMinInitialPayment = Math.round(validatedPrice * 0.25);
    if (initialPayment < newMinInitialPayment) {
      setInitialPayment(newMinInitialPayment);
    }
    
    // Если первоначальный взнос больше 50% от стоимости товара, корректируем его
    const maxInitialPayment = validatedPrice * 0.5;
    if (initialPayment > maxInitialPayment) {
      setInitialPayment(Math.round(maxInitialPayment));
    }
  };
  
  // Обработчик изменения первоначального взноса через слайдер
  const handleInitialPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setInitialPayment(value);
  };

  // Обработчик изменения первоначального взноса через поле ввода
  const handleInitialPaymentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const numValue = value ? parseInt(value) : minInitialPayment;
    setInitialPayment(Math.min(Math.max(numValue, minInitialPayment), Math.floor(productPrice * 0.5)));
  };
  
  // Обработчик изменения срока
  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setTerm(value);
  };

  // Форматирование числа с пробелами
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  // Склонение слова "месяц" в зависимости от числа
  const getMonthText = (months: number) => {
    if (months === 1) return 'месяц';
    if (months >= 2 && months <= 4) return 'месяца';
    return 'месяцев';
  };
  
  // Пересчет при изменении любого из параметров
  useEffect(() => {
    calculatePayments();
  }, [productPrice, initialPayment, term]);
  
  return (
    <div className="bg-gradient-to-br from-[#454ee6] via-[#454ee6] to-[#9333ea] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden">
      <div className="mb-4 md:mb-6 flex items-center">
        <Shield className="h-6 w-6 text-white mr-2" />
        <h2 className="text-xl font-bold text-white">Расчет рассрочки</h2>
      </div>
      
      <div className="flex flex-col xl:flex-row gap-5">
        {/* Левая сторона - параметры рассрочки */}
        <div className="flex-grow-[3] bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-5">Параметры рассрочки</h3>
          
          {/* Стоимость товара */}
          <div className="mb-4 md:mb-5">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <span className="text-white mr-1 md:mr-2 text-xs md:text-base">₽</span>
                <span className="text-white text-sm md:text-base">Стоимость товара</span>
              </div>
              <div className="bg-white/30 py-1 px-2 md:px-3 rounded-lg flex items-center hover:bg-white/40 transition-colors">
                <input
                  type="text"
                  value={formatNumber(productPrice)}
                  onChange={handleProductPriceInputChange}
                  className="bg-transparent text-white text-right font-semibold text-sm md:text-base w-20 md:w-24 outline-none"
                />
                <span className="ml-1 text-white text-sm md:text-base">₽</span>
              </div>
            </div>
            <div className="relative mb-2">
              <input
                type="range"
                min="1000"
                max="500000"
                step="1000"
                value={productPrice}
                onChange={handleProductPriceChange}
                className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider-input"
              />
            </div>
          </div>
          
          {/* Первоначальный взнос */}
          <div className="mb-4 md:mb-5">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <CreditCard className="h-4 w-4 md:h-5 md:w-5 text-white mr-1 md:mr-2" />
                <span className="text-white text-sm md:text-base">Первоначальный взнос</span>
                <span className="text-xs md:text-sm text-white/80 ml-1">(минимум 25%)</span>
              </div>
              <div className="bg-white/30 py-1 px-2 md:px-3 rounded-lg flex items-center hover:bg-white/40 transition-colors">
                <input
                  type="text"
                  value={formatNumber(initialPayment)}
                  onChange={handleInitialPaymentInputChange}
                  className="bg-transparent text-white text-right font-semibold text-sm md:text-base w-20 md:w-24 outline-none"
                />
                <span className="ml-1 text-white text-sm md:text-base">₽</span>
              </div>
            </div>
            <div className="relative mb-2">
              <input
                type="range"
                min={minInitialPayment}
                max={productPrice * 0.5}
                step="500"
                value={initialPayment}
                onChange={handleInitialPaymentChange}
                className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider-input"
              />
            </div>
          </div>
          
          {/* Срок рассрочки */}
          <div className="mb-4 md:mb-5">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 md:h-5 md:w-5 text-white mr-1 md:mr-2" />
                <span className="text-white text-sm md:text-base">Срок рассрочки</span>
              </div>
              <div className="text-white font-medium">
                {term} {getMonthText(term)}
              </div>
            </div>
            <div className="relative mb-2">
              <input
                type="range"
                min="1"
                max="9"
                step="1"
                value={term}
                onChange={handleTermChange}
                className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider-input"
              />
              <div className="flex justify-between mt-1 mb-2 text-xs text-white/60">
                <span>1 мес</span>
                <span>9 мес</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Правая сторона - результаты */}
        <div className="flex-grow-[2] bg-white rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="mb-5">
              <div className="text-[#6E6E85] mb-1">Ежемесячный платеж</div>
              <div className="flex items-baseline">
                <div className="text-5xl font-bold text-[#4A56E2]">{formatNumber(monthlyPayment)}</div>
                <div className="text-base text-[#6E6E85] ml-2">₽ / мес.</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#F0F1FF] rounded-lg p-3">
                <div className="text-[#6E6E85] text-sm mb-1">Торговая наценка</div>
                <div className="text-lg font-medium text-[#4A56E2]">{formatNumber(markupAmount)} ₽</div>
              </div>
              
              <div className="bg-[#F0F1FF] rounded-lg p-3">
                <div className="text-[#6E6E85] text-sm mb-1">Общая стоимость</div>
                <div className="text-lg font-medium text-[#4A56E2]">{formatNumber(totalAmount)} ₽</div>
              </div>
            </div>
          </div>
          
          <Link to={`/application?productCost=${productPrice}&initialPayment=${initialPayment}&term=${term}&markup=${markupAmount}&totalCost=${totalAmount}&monthlyPayment=${monthlyPayment}&productId=1`} className="w-full bg-[#4A56E2] hover:bg-[#3D47B3] transition-colors text-white font-medium py-3 px-4 rounded-lg mt-5 text-center">
            Оформить заявку
          </Link>
        </div>
      </div>
      
      <style>
        {`
          input[type=range].slider-input {
            -webkit-appearance: none;
            height: 8px;
            position: relative;
            margin: 10px 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 4px;
          }
          
          input[type=range].slider-input::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
            margin-top: -9px; /* Точное выравнивание ползунка по центру */
          }
          
          input[type=range].slider-input::-moz-range-thumb {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            border: 2px solid rgba(255, 255, 255, 0.2);
            transform: translateY(-50%); /* Выравнивание по центру для Firefox */
            margin-top: 0; /* Убираем смещение для Firefox */
          }
          
          input[type=range].slider-input::-webkit-slider-runnable-track {
            height: 8px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 4px;
            cursor: pointer;
          }
          
          input[type=range].slider-input::-moz-range-track {
            height: 8px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 4px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default MainPageCalculator;
