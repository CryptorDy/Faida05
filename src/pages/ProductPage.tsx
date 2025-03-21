import React, { useState, useEffect } from 'react';
// @ts-ignore - В версии react-router-dom 7.x типы могут отличаться от фактических экспортов
import { useParams, useNavigate } from 'react-router-dom';
import { Calculator, ArrowLeft } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import { Product } from '../types/api';
import { ApiService } from '../services/api';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [selectedTerm, setSelectedTerm] = useState(3);
  const [initialPayment, setInitialPayment] = useState(0);
  const [initialPaymentInput, setInitialPaymentInput] = useState('');
  
  useEffect(() => {
    const loadProduct = async () => {
      if (id) {
        setIsLoading(true);
        try {
          const productId = parseInt(id, 10);
          if (isNaN(productId)) {
            setError('Неверный формат идентификатора товара');
            return;
          }
          
          const productData = await ApiService.getProductByIdAsync(productId);
          setProduct(productData);
          
          if (productData) {
            // Set initial payment to 25% of product price when product loads
            const initialValue = Math.round(productData.price * 0.25);
            setInitialPayment(initialValue);
            setInitialPaymentInput(initialValue.toString());
          }
          setError(null);
        } catch (error) {
          console.error('Ошибка при загрузке товара:', error);
          setError('Не удалось загрузить информацию о товаре. Пожалуйста, попробуйте позже.');
        } finally {
          setIsLoading(false);
        }
      }
    };
    
    loadProduct();
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">Загрузка товара...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ошибка</h2>
        <p className="text-gray-600 mb-8">{error}</p>
        <button 
          onClick={() => navigate('/catalog')}
          className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-2 rounded-lg font-medium"
        >
          Вернуться в каталог
        </button>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Товар не найден</h2>
        <p className="text-gray-600 mb-8">Запрашиваемый товар не существует или был удален.</p>
        <button 
          onClick={() => navigate('/catalog')}
          className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-2 rounded-lg font-medium"
        >
          Вернуться в каталог
        </button>
      </div>
    );
  }
  
  // Calculate monthly payment using the same formula as in MainPageCalculator
  const calculatePayments = () => {
    let calculatedObligation = Math.max(0, product.price - initialPayment);
    const months = Math.min(9, Math.max(1, selectedTerm));
    const percent = 3 + months * 0.1;
    const markupOneMonth = (calculatedObligation / 100) * percent;
    const calculatedMarkup = markupOneMonth * months;

    calculatedObligation += calculatedMarkup;
    
    const obligation = product.price - initialPayment;
    const markup = Math.max(0, Math.round(calculatedMarkup));
    const totalCost = Math.max(product.price, Math.round(product.price + calculatedMarkup));
    const monthlyPayment = Math.max(0, Math.round(calculatedObligation / selectedTerm));
    
    return {
      markup,
      totalCost,
      monthlyPayment
    };
  };
  
  const { markup, totalCost, monthlyPayment } = calculatePayments();
  
  const handleTermChange = (value: number) => {
    setSelectedTerm(value);
  };
  
  const handleInitialPaymentChange = (value: number) => {
    setInitialPayment(value);
    setInitialPaymentInput(value.toString());
  };
  
  const handleInitialPaymentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setInitialPaymentInput(value);
    
    const numValue = value === '' ? 0 : parseInt(value);
    // Ensure the value is within valid range
    if (numValue >= Math.round(product.price * 0.25) && numValue <= product.price) {
      setInitialPayment(numValue);
    }
  };
  
  const handleInitialPaymentInputBlur = () => {
    const minValue = Math.round(product.price * 0.25);
    const maxValue = product.price;
    
    let value = initialPaymentInput === '' ? 0 : parseInt(initialPaymentInput);
    
    // Ensure the value is within valid range
    if (value < minValue) {
      value = minValue;
    } else if (value > maxValue) {
      value = maxValue;
    }
    
    setInitialPayment(value);
    setInitialPaymentInput(value.toString());
  };
  
  const handleApplyForLoan = () => {
    // Navigate to application page with product info and calculated values
    navigate(`/application?productCost=${product.price}&initialPayment=${initialPayment}&term=${selectedTerm}&monthlyPayment=${monthlyPayment}&markup=${markup}&totalCost=${totalCost}&productName=${encodeURIComponent(product.name)}&productId=${product.id}`);
  };
  
  // Create WhatsApp message with product details
  const createWhatsAppMessage = () => {
    return `Ас салам алейкум! Меня интересует товар: ${product.name} за ${product.price.toLocaleString('ru-RU')} ₽`;
  };
  
  // Calculate minimum initial payment (25% of product price)
  const minInitialPayment = Math.round(product.price * 0.25);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <button 
        onClick={() => navigate('/catalog')}
        className="flex items-center text-indigo-600 hover:text-indigo-800 mb-4 font-medium"
      >
        <ArrowLeft className="mr-1 h-5 w-5" />
        Назад к каталогу
      </button>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Product image with WhatsApp icon in bottom-right corner */}
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8 relative">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="max-h-80 mx-auto"
              onError={(e) => {
                // Fallback image if the product image fails to load
                (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Нет+изображения';
              }} 
            />
            
            {/* WhatsApp icon in bottom-right corner of image */}
            <div className="absolute bottom-4 right-4">
              <WhatsAppButton />
            </div>
          </div>
          
          {/* Product details */}
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="text-sm text-gray-500 mb-1">{product.categoryName || 'Товар'}</div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="text-3xl font-bold text-indigo-600 mb-6">{product.price.toLocaleString('ru-RU')} ₽</div>
            
            {/* Installment plan */}
            <div className="bg-indigo-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-lg mb-3">Рассрочка</h3>
              
              {/* Initial Payment Slider and Input */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">Первоначальный взнос</label>
                  <div className="flex items-center bg-white/80 rounded-lg overflow-hidden">
                    <input
                      type="text"
                      value={initialPaymentInput}
                      onChange={handleInitialPaymentInputChange}
                      onBlur={handleInitialPaymentInputBlur}
                      className="w-20 px-2 py-1 text-sm text-right text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0"
                    />
                    <span className="text-sm text-gray-700 pr-2">₽</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={minInitialPayment}
                  max={product.price}
                  step={1000}
                  value={initialPayment}
                  onChange={(e) => handleInitialPaymentChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Мин: {minInitialPayment.toLocaleString('ru-RU')} ₽</span>
                  <span>Макс: {product.price.toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>
              
              {/* Term Slider */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">Срок рассрочки</label>
                  <div className="text-sm font-medium text-gray-700 bg-white/80 px-3 py-1 rounded-lg">
                    {selectedTerm} {getMonthText(selectedTerm)}
                  </div>
                </div>
                <input
                  type="range"
                  min={1}
                  max={9}
                  step={1}
                  value={selectedTerm}
                  onChange={(e) => handleTermChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                />
                
                <div className="relative w-full h-6 mt-1">
                  {[1, 3, 6, 9].map((mark) => {
                    const percent = ((mark - 1) / (9 - 1)) * 100;
                    return (
                      <div 
                        key={mark} 
                        className="absolute transform -translate-x-1/2 flex flex-col items-center"
                        style={{ left: `${percent}%` }}
                      >
                        <div className="h-2 w-1 bg-indigo-300 rounded-full"></div>
                        <span className="text-xs text-gray-600 mt-1">{mark}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Results */}
              <div className="bg-white rounded-lg p-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Ежемесячный платеж:</span>
                  <span className="font-medium">{monthlyPayment.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Наценка:</span>
                  <span className="font-medium">{markup.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between items-center font-medium">
                  <span className="text-sm">Итого к оплате:</span>
                  <span>{totalCost.toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>
            </div>
            
            {/* Apply for loan button */}
            <button 
              className="w-full bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium text-lg flex items-center justify-center"
              onClick={handleApplyForLoan}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Оформить в рассрочку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function getMonthText(months: number): string {
  if (months === 1) return 'месяц';
  if (months >= 2 && months <= 4) return 'месяца';
  return 'месяцев';
}

export default ProductPage;
