import React, { useState, useEffect } from 'react';
import ApiClient from '../utils/ApiClient';
import { ApiService } from '../services/api';
import { adaptCategories, adaptProducts } from '../utils/adapters';

const DebugPage: React.FC = () => {
  const [rawProducts, setRawProducts] = useState<any[]>([]);
  const [adaptedProducts, setAdaptedProducts] = useState<any[]>([]);
  const [rawCategories, setRawCategories] = useState<any[]>([]);
  const [adaptedCategories, setAdaptedCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Получение сырых данных напрямую через fetch
        const [productsResponse, categoriesResponse] = await Promise.all([
          fetch('/api/products', {
            headers: {
              'Accept': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            }
          }),
          fetch('/api/categories', {
            headers: {
              'Accept': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            }
          })
        ]);
        
        if (!productsResponse.ok || !categoriesResponse.ok) {
          throw new Error('Не удалось получить данные. Ошибка запроса к API.');
        }
        
        const [rawProductsData, rawCategoriesData] = await Promise.all([
          productsResponse.json(),
          categoriesResponse.json()
        ]);
        
        setRawProducts(rawProductsData);
        setRawCategories(rawCategoriesData);
        
        // Адаптируем данные для проверки
        setAdaptedProducts(adaptProducts(rawProductsData));
        setAdaptedCategories(adaptCategories(rawCategoriesData));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Отладка API</h1>
      <ApiClient />
      
      <div className="mt-12 bg-green-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Оптимизация загрузки товаров</h2>
        <p className="mb-4">
          Реализован оптимизированный подход к загрузке товаров:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Все товары загружаются один раз при инициализации приложения</li>
          <li>Фильтрация по категориям происходит на стороне клиента</li>
          <li>Для этого используется новый хук <code className="bg-gray-100 px-1 py-0.5 rounded">useProductsOptimized</code></li>
          <li>Это позволяет мгновенно переключаться между категориями без дополнительных запросов</li>
        </ul>
        
        <div className="mt-4 bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Преимущества:</h3>
          <ul className="list-disc pl-6">
            <li>Уменьшение количества запросов к серверу</li>
            <li>Мгновенная фильтрация категорий</li>
            <li>Лучший UX благодаря отсутствию задержек при смене категории</li>
            <li>Снижение нагрузки на сервер API</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 bg-yellow-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Информация о прокси-сервере</h2>
        <p className="mb-4">
          Текущий прокси настроен через Vite с следующими параметрами:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded overflow-auto text-sm">
{`{
  '/api': {
    target: 'http://176.124.214.240',
    changeOrigin: true,
    secure: false,
    rewrite: (path) => path.replace(/^\\/api/, '/api')
  }
}`}
        </pre>
        
        <h3 className="text-lg font-semibold mt-6 mb-2">Заголовки запросов</h3>
        <p className="mb-2">
          Для всех запросов устанавливаются специальные заголовки:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Accept: application/json</li>
          <li>X-Requested-With: XMLHttpRequest</li>
          <li>credentials: include (для передачи куки)</li>
        </ul>
      </div>
      
      <div className="mt-12 bg-blue-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Сравнение форматов данных</h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg">
            {error}
          </div>
        ) : (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Товары</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Исходный формат API</h4>
                  <pre className="bg-gray-800 text-white p-4 rounded overflow-auto text-sm max-h-60">
                    {JSON.stringify(rawProducts, null, 2)}
                  </pre>
                </div>
                <div>
                  <h4 className="font-medium mb-2">После адаптации</h4>
                  <pre className="bg-gray-800 text-white p-4 rounded overflow-auto text-sm max-h-60">
                    {JSON.stringify(adaptedProducts, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Категории</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Исходный формат API</h4>
                  <pre className="bg-gray-800 text-white p-4 rounded overflow-auto text-sm max-h-60">
                    {JSON.stringify(rawCategories, null, 2)}
                  </pre>
                </div>
                <div>
                  <h4 className="font-medium mb-2">После адаптации</h4>
                  <pre className="bg-gray-800 text-white p-4 rounded overflow-auto text-sm max-h-60">
                    {JSON.stringify(adaptedCategories, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DebugPage; 