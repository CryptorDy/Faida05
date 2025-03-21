import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Shield, CreditCard, Calendar, DollarSign, User, Phone, Home, ShoppingBag, Check, ArrowLeft } from 'lucide-react';

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
  const calculatorData = location.state as ApplicationState;
  
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
  
  // Validate if we have calculator data
  useEffect(() => {
    if (!calculatorData || !calculatorData.productPrice) {
      navigate('/');
    }
  }, [calculatorData, navigate]);
  
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
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
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
  
  if (!calculatorData) {
    return <div className="p-8 text-center">Загрузка...</div>;
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
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
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
                      Я согласен с условиями рассрочки и обработки персональных данных
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
        
        <div className="md:col-span-1">
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 text-indigo-600 mr-2" />
              Параметры рассрочки
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-600">Стоимость товара</span>
                </div>
                <span className="font-medium">{formatNumber(calculatorData.productPrice)} ₽</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-600">Первоначальный взнос</span>
                </div>
                <span className="font-medium">{formatNumber(calculatorData.initialPayment)} ₽</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-600">Срок рассрочки</span>
                </div>
                <span className="font-medium">{calculatorData.term} {getMonthText(calculatorData.term)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-600">Торговая наценка</span>
                </div>
                <span className="font-medium">{formatNumber(calculatorData.markupAmount)} ₽</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-600">Общая стоимость</span>
                </div>
                <span className="font-medium">{formatNumber(calculatorData.totalAmount)} ₽</span>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-xl mt-4">
                <div className="text-sm text-indigo-800 mb-1">Ежемесячный платеж</div>
                <div className="text-2xl font-bold text-indigo-700">{formatNumber(calculatorData.monthlyPayment)} ₽</div>
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
