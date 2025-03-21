import { Product, Category, ApiResponse } from '../types/api';

const API_BASE_URL = 'http://176.124.214.240';

/**
 * Функция для обработки ошибок запросов к API
 */
const handleApiError = (error: any): never => {
  console.error('API Error:', error);
  throw new Error(error.message || 'Ошибка при выполнении запроса к API');
};

/**
 * Класс для работы с API товаров и категорий
 */
export class ApiService {
  /**
   * Получение списка всех товаров
   */
  static async getAllProductsAsync(): Promise<Product[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products`);
      
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      
      const data: ApiResponse<Product[]> = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Не удалось получить список товаров');
      }
      
      return data.data;
    } catch (error) {
      return handleApiError(error);
    }
  }
  
  /**
   * Получение товаров по категории
   */
  static async getProductsByCategoryAsync(categoryId: number): Promise<Product[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products/category/${categoryId}`);
      
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      
      const data: ApiResponse<Product[]> = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || `Не удалось получить товары категории ${categoryId}`);
      }
      
      return data.data;
    } catch (error) {
      return handleApiError(error);
    }
  }
  
  /**
   * Получение популярных товаров
   */
  static async getPopularProductsAsync(): Promise<Product[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products/popular`);
      
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      
      const data: ApiResponse<Product[]> = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Не удалось получить популярные товары');
      }
      
      return data.data;
    } catch (error) {
      return handleApiError(error);
    }
  }
  
  /**
   * Получение товара по ID
   */
  static async getProductByIdAsync(id: number): Promise<Product> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products/${id}`);
      
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      
      const data: ApiResponse<Product> = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || `Не удалось получить товар с ID ${id}`);
      }
      
      return data.data;
    } catch (error) {
      return handleApiError(error);
    }
  }
  
  /**
   * Получение списка всех категорий
   */
  static async getAllCategoriesAsync(): Promise<Category[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/categories`);
      
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      
      const data: ApiResponse<Category[]> = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Не удалось получить список категорий');
      }
      
      return data.data;
    } catch (error) {
      return handleApiError(error);
    }
  }
}
