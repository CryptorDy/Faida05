import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { Calculator, ArrowLeft } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import { Product } from '../data/products';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const [selectedTerm, setSelectedTerm] = useState(3);
  const [initialPayment, setInitialPayment] = useState(0);
  const [initialPaymentInput, setInitialPaymentInput] = useState('');
  
  useEffect(() => {
    const loadProduct = async () => {
      if (id) {
        setIsLoading(true);
        try {
          const productData = await fetchProductById(parseInt(id));
          setProduct(productData);
          
          if (productData) {
            // Set initial payment to 25% of product price when product loads
            const initialValue = Math.round(productData.price * 0.25);
            setInitialPayment(initialValue);
            setInitialPaymentInput(initialValue.toString());
          }
        } catch (error) {
          console.error('Error loading product:', error);
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
        <p className="text-gray-600">Загрузка...</p>
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
    return `Ас салам алейкум! Меня интересует товар: ${product.name} за ${product.price.toLocaleString()} ₽`;
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
            <img src={product.image} alt={product.name} className="max-h-80 mx-auto" />
            
            {/* WhatsApp icon in bottom-right corner of image */}
            <div className="absolute bottom-4 right-4">
              <WhatsAppButton 
                phoneNumber="+79634096111"
                message={createWhatsAppMessage()}
                className="rounded-full p-2 shadow-md bg-green-500 hover:bg-green-600"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
              </WhatsAppButton>
            </div>
          </div>
          
          {/* Product details */}
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="text-sm text-gray-500 mb-1">{product.category}</div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="text-3xl font-bold text-indigo-600 mb-6">{product.price.toLocaleString()} ₽</div>
            
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
                  <span>Мин: {minInitialPayment.toLocaleString()} ₽</span>
                  <span>Макс: {product.price.toLocaleString()} ₽</span>
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
              
              {/* Payment Info */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-white/80 rounded-lg p-3">
                  <div className="text-gray-600 text-xs">Ежемесячный платеж:</div>
                  <div className="text-base font-bold text-indigo-700">
                    {monthlyPayment.toLocaleString()} ₽/мес
                  </div>
                </div>
                <div className="bg-white/80 rounded-lg p-3">
                  <div className="text-gray-600 text-xs">Итоговая стоимость:</div>
                  <div className="text-base font-bold text-indigo-700">
                    {totalCost.toLocaleString()} ₽
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 italic">
                Торговая наценка: {markup.toLocaleString()} ₽
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
