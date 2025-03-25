import { Product, Category, ApiResponse, ApplicationDto } from '../types/api';
import { adaptProduct, adaptProducts, adaptCategory, adaptCategories } from '../utils/adapters';

/**
 * Базовые опции для всех fetch запросов
 */
const fetchOptions: RequestInit = {
  credentials: 'include', // Передаем куки для поддержки сессий
  headers: {
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest', // Помогает серверу определить AJAX запрос
  }
};

/**
 * Функция для обработки ошибок запросов к API
 */
const handleApiError = (error: any, endpoint: string = ''): never => {
  console.error(`API Error [${endpoint}]:`, error);
  
  // Проверяем тип ошибки и предоставляем понятное сообщение пользователю
  if (error instanceof TypeError && error.message === 'Failed to fetch') {
    throw new Error('Не удалось соединиться с сервером. Проверьте ваше подключение к интернету.');
  }
  
  // Если ошибка имеет статус 401 или 403, это проблема с аутентификацией
  if (error.status === 401 || error.status === 403) {
    throw new Error('Доступ запрещен. Пожалуйста, авторизуйтесь заново.');
  }
  
  // Общее сообщение об ошибке
  throw new Error(error.message || 'Ошибка при выполнении запроса к API');
};

/**
 * Функция для обработки ответа API в зависимости от его формата
 * Поддерживает как прямые данные, так и обернутые в ApiResponse
 */
function processApiResponse<T>(responseData: any): T {
  // Проверяем, является ли ответ объектом ApiResponse
  if (responseData && typeof responseData === 'object' && 'success' in responseData) {
    const apiResponse = responseData as ApiResponse<T>;
    
    // Если запрос не успешен, выбрасываем ошибку
    if (!apiResponse.success) {
      throw new Error(apiResponse.message || 'Ошибка на сервере');
    }
    
    return apiResponse.data;
  }
  
  // Если данные пришли напрямую (массив или объект)
  return responseData as T;
}

/**
 * Класс для работы с API товаров и категорий
 */
export class ApiService {
  /**
   * Получение списка всех товаров
   */
  static async getAllProductsAsync(): Promise<Product[]> {
    try {
      const response = await fetch(`/api/products`, fetchOptions);
      
      if (!response.ok) {
        // Пытаемся получить текст ошибки и код статуса
        const errorText = await response.text().catch(() => 'Неизвестная ошибка');
        const error = new Error(errorText);
        (error as any).status = response.status;
        throw error;
      }
      
      const responseData = await response.json();
      const products = processApiResponse<any[]>(responseData);
      return adaptProducts(products);
    } catch (error) {
      return handleApiError(error, 'getAllProductsAsync');
    }
  }
  
  /**
   * Получение товаров по категории
   */
  static async getProductsByCategoryAsync(categoryId: number): Promise<Product[]> {
    try {
      const response = await fetch(`/api/products/category/${categoryId}`, fetchOptions);
      
      if (!response.ok) {
        // Пытаемся получить текст ошибки и код статуса
        const errorText = await response.text().catch(() => 'Неизвестная ошибка');
        const error = new Error(errorText);
        (error as any).status = response.status;
        throw error;
      }
      
      const responseData = await response.json();
      const products = processApiResponse<any[]>(responseData);
      return adaptProducts(products);
    } catch (error) {
      return handleApiError(error, `getProductsByCategoryAsync(${categoryId})`);
    }
  }
  
  /**
   * Получение популярных товаров
   */
  static async getPopularProductsAsync(): Promise<Product[]> {
    try {
      const response = await fetch(`/api/products/popular`, fetchOptions);
      
      if (!response.ok) {
        // Пытаемся получить текст ошибки и код статуса
        const errorText = await response.text().catch(() => 'Неизвестная ошибка');
        const error = new Error(errorText);
        (error as any).status = response.status;
        throw error;
      }
      
      const responseData = await response.json();
      const products = processApiResponse<any[]>(responseData);
      return adaptProducts(products);
    } catch (error) {
      return handleApiError(error, 'getPopularProductsAsync');
    }
  }
  
  /**
   * Получение товара по ID
   */
  static async getProductByIdAsync(id: number): Promise<Product> {
    try {
      const response = await fetch(`/api/products/${id}`, fetchOptions);
      
      if (!response.ok) {
        // Пытаемся получить текст ошибки и код статуса
        const errorText = await response.text().catch(() => 'Неизвестная ошибка');
        const error = new Error(errorText);
        (error as any).status = response.status;
        throw error;
      }
      
      const responseData = await response.json();
      const product = processApiResponse<any>(responseData);
      return adaptProduct(product);
    } catch (error) {
      return handleApiError(error, `getProductByIdAsync(${id})`);
    }
  }
  
  /**
   * Получение списка всех категорий
   */
  static async getAllCategoriesAsync(): Promise<Category[]> {
    try {
      const response = await fetch(`/api/categories`, fetchOptions);
      
      if (!response.ok) {
        // Пытаемся получить текст ошибки и код статуса
        const errorText = await response.text().catch(() => 'Неизвестная ошибка');
        const error = new Error(errorText);
        (error as any).status = response.status;
        throw error;
      }
      
      const responseData = await response.json();
      const categories = processApiResponse<any[]>(responseData);
      return adaptCategories(categories);
    } catch (error) {
      return handleApiError(error, 'getAllCategoriesAsync');
    }
  }

  /**
   * Отправка заявки на рассрочку
   */
  static async submitApplicationAsync(application: ApplicationDto): Promise<any> {
    try {
      const response = await fetch(`/api/applications`, {
        ...fetchOptions,
        method: 'POST',
        headers: {
          ...fetchOptions.headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(application),
      });
      
      if (!response.ok) {
        // Пытаемся получить текст ошибки и код статуса
        const errorText = await response.text().catch(() => 'Неизвестная ошибка');
        const error = new Error(errorText);
        (error as any).status = response.status;
        throw error;
      }
      
      const responseData = await response.json();
      return processApiResponse<any>(responseData);
    } catch (error) {
      return handleApiError(error, 'submitApplicationAsync');
    }
  }
}
