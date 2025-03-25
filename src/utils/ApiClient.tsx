import React, { useState } from 'react';
import { ApiService } from '../services/api';

/**
 * Компонент для тестирования API
 * Можно добавить на любую страницу для отладки
 */
const ApiClient: React.FC = () => {
  const [apiPath, setApiPath] = useState('/api/products/popular');
  const [method, setMethod] = useState('GET');
  const [requestBody, setRequestBody] = useState('');
  const [response, setResponse] = useState<{success: boolean; data: any; error?: string}>({
    success: false,
    data: null
  });
  const [loading, setLoading] = useState(false);
  
  const handleRequestClick = async () => {
    setLoading(true);
    try {
      let result;
      
      // Выполняем запрос в зависимости от метода
      if (method === 'GET') {
        switch (apiPath) {
          case '/api/products/popular':
            result = await ApiService.getPopularProductsAsync();
            break;
          case '/api/products':
            result = await ApiService.getAllProductsAsync();
            break;
          case '/api/categories':
            result = await ApiService.getAllCategoriesAsync();
            break;
          default:
            if (apiPath.startsWith('/api/products/')) {
              const id = apiPath.replace('/api/products/', '');
              if (!isNaN(parseInt(id, 10))) {
                result = await ApiService.getProductByIdAsync(parseInt(id, 10));
              }
            }
            break;
        }
      }
      else if (method === 'POST' && apiPath === '/api/applications') {
        const data = JSON.parse(requestBody || '{}');
        result = await ApiService.submitApplicationAsync(data);
      }
      
      // Если метод не был обработан
      if (!result) {
        // Выполняем запрос напрямую через fetch
        const options: RequestInit = {
          method,
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        };
        
        if (method !== 'GET' && requestBody) {
          options.headers = {
            ...options.headers,
            'Content-Type': 'application/json'
          };
          options.body = requestBody;
        }
        
        const response = await fetch(apiPath, options);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        
        result = await response.json();
      }
      
      setResponse({
        success: true,
        data: result
      });
    } catch (error) {
      setResponse({
        success: false,
        data: null,
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">API Клиент для тестирования</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Метод</label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">API Endpoint</label>
        <input
          type="text"
          value={apiPath}
          onChange={(e) => setApiPath(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="/api/products/popular"
        />
      </div>
      
      {method !== 'GET' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Request Body (JSON)</label>
          <textarea
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
            rows={5}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md font-mono text-sm"
            placeholder={'{\n  "key": "value"\n}'}
          />
        </div>
      )}
      
      <button
        onClick={handleRequestClick}
        disabled={loading}
        className={`w-full p-2 rounded-md text-white ${
          loading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
        }`}
      >
        {loading ? 'Загрузка...' : 'Отправить запрос'}
      </button>
      
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Ответ:</h3>
        <div className={`p-4 rounded-md ${response.success ? 'bg-green-50' : 'bg-red-50'}`}>
          {response.error ? (
            <div className="text-red-600">{response.error}</div>
          ) : (
            <pre className="whitespace-pre-wrap break-words font-mono text-sm">
              {response.data ? JSON.stringify(response.data, null, 2) : 'Нет данных'}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiClient; 