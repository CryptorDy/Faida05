import React, { useState, useEffect } from 'react';
// @ts-ignore - В версии react-router-dom 7.x типы могут отличаться от фактических экспортов
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Shield, CreditCard, Calendar, User, Phone, Home, ShoppingBag, Check, ArrowLeft } from 'lucide-react';

interface ApplicationState {
  productPrice: number;
  initialPayment: number;
  term: number;
  markupAmount: number;
  totalAmount: number;
  monthlyPayment: number;
}

const ApplicationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  // Get params from URL
  const productCost = Number(queryParams.get('productCost') || 0);
  const initialPayment = Number(queryParams.get('initialPayment') || 0);
  const term = Number(queryParams.get('term') || 3);
  const markup = Number(queryParams.get('markup') || 0);
  const totalCost = Number(queryParams.get('totalCost') || 0);
  const monthlyPayment = Number(queryParams.get('monthlyPayment') || 0);
  const productName = queryParams.get('productName') || '';
  const productId = Number(queryParams.get('productId') || 0);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    residenceAddress: '',
    agreeToTerms: false,
    isSubmitting: false,
    isSubmitted: false,
    error: ''
  });
  
  // Validate if we have product data
  useEffect(() => {
    if (!productCost || !productId) {
      navigate('/');
    }
  }, [productCost, productId, navigate]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      setFormData(prev => ({
        ...prev,
        error: 'Необходимо согласиться с условиями'
      }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      isSubmitting: true,
      error: ''
    }));
    
    // Simulate API call
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true
      }));
    }, 1500);
  };
  
  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('ru-RU');
  };
  
  if (formData.isSubmitted) {
    return (
      <div className="w-full px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Заявка успешно отправлена!</h1>
          <p className="text-gray-600 mb-6">
            Спасибо за вашу заявку. Наш менеджер свяжется с вами в ближайшее время для подтверждения деталей.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }
  
  if (!productCost || !productId) {
    return (
      <div className="w-full px-4 py-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">Загрузка данных...</p>
      </div>
    );
  }
  
  return (
    <div className="w-full px-4 py-8">
      {/* Back button */}
      <button 
        onClick={handleGoBack}
        className="flex items-center text-indigo-600 hover:text-indigo-800 mb-4 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-1" />
        <span>Назад</span>
      </button>
      
      <h1 className="text-3xl font-bold mb-8 text-center">Оформление заявки на рассрочку</h1>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-7 gap-8">
        <div className="md:col-span-4">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Персональные данные</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ФИО
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Магомедов Магомед Магомедович"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Номер телефона
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Адрес проживания
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Home className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      name="residenceAddress"
                      value={formData.residenceAddress}
                      onChange={handleInputChange}
                      required
                      rows={2}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Город, улица, дом, квартира"
                    />
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="agreeToTerms"
                      type="checkbox"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">
                      Я согласен с <Link to="/terms" className="text-indigo-600 hover:text-indigo-800">условиями рассрочки</Link> и <Link to="/privacy" className="text-indigo-600 hover:text-indigo-800">политикой обработки персональных данных</Link>
                    </label>
                  </div>
                </div>
                
                {formData.error && (
                  <div className="text-red-500 text-sm">{formData.error}</div>
                )}
                
                <button
                  type="submit"
                  disabled={formData.isSubmitting}
                  className={`w-full py-3 px-4 ${
                    formData.isSubmitting 
                      ? 'bg-indigo-400' 
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  } text-white font-medium rounded-xl transition-colors duration-200`}
                >
                  {formData.isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 text-indigo-600 mr-2" />
              Параметры рассрочки
            </h2>
            
            {productName && (
              <div className="flex items-center py-2 border-b border-gray-100 mb-4">
                <ShoppingBag className="h-4 w-4 text-indigo-500 mr-2" />
                <span className="text-sm text-gray-600 font-medium">{productName}</span>
              </div>
            )}
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <span className="h-4 w-4 text-indigo-500 mr-2 font-medium">₽</span>
                  <span className="text-sm text-gray-600">Стоимость товара</span>
                </div>
                <span className="font-medium">{formatNumber(productCost)} ₽</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-600">Первоначальный взнос</span>
                </div>
                <span className="font-medium">{formatNumber(initialPayment)} ₽</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-600">Срок рассрочки</span>
                </div>
                <span className="font-medium">{term} {getMonthText(term)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <span className="h-4 w-4 text-indigo-500 mr-2 font-medium">%</span>
                  <span className="text-sm text-gray-600">Наценка</span>
                </div>
                <span className="font-medium">{formatNumber(markup)} ₽</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-600">Ежемесячный платеж</span>
                </div>
                <span className="font-medium">{formatNumber(monthlyPayment)} ₽</span>
              </div>
              
              <div className="flex justify-between items-center py-3 bg-indigo-50 px-3 rounded-lg mt-6">
                <span className="font-medium">Итого к оплате:</span>
                <span className="font-bold text-lg text-indigo-600">{formatNumber(totalCost)} ₽</span>
              </div>
            </div>
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

export default ApplicationPage;
