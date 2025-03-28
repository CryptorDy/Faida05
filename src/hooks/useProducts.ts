import { useState, useEffect, useMemo } from 'react';
import { ApiService } from '../services/api';
import { Product, Category } from '../types/api';

export const useProducts = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const data = await ApiService.getAllCategoriesAsync();
        setCategories(data);
        setError(null);
      } catch (err) {
        setError('Не удалось загрузить категории. Пожалуйста, попробуйте позже.');
        console.error('Ошибка при загрузке категорий:', err);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  return { categories, loading, error };
};

export const useProductsByCategory = (categoryId: number | null) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = categoryId 
          ? await ApiService.getProductsByCategoryAsync(categoryId)
          : await ApiService.getAllProductsAsync();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Не удалось загрузить товары. Пожалуйста, попробуйте позже.');
        console.error('Ошибка при загрузке товаров:', err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [categoryId]);

  return { products, loading, error };
};

export const useProduct = (id: string | undefined) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      if (!id) {
        setError('Идентификатор товара не указан');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const productId = parseInt(id, 10);
        if (isNaN(productId)) {
          setError('Неверный формат идентификатора товара');
          return;
        }
        
        const data = await ApiService.getProductByIdAsync(productId);
        setProduct(data);
        setError(null);
      } catch (err) {
        setError('Не удалось загрузить информацию о товаре. Пожалуйста, попробуйте позже.');
        console.error('Ошибка при загрузке товара:', err);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  return { product, loading, error };
};

export const usePopularProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPopularProducts = async () => {
      try {
        setLoading(true);
        const data = await ApiService.getPopularProductsAsync();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Не удалось загрузить популярные товары. Пожалуйста, попробуйте позже.');
        console.error('Ошибка при загрузке популярных товаров:', err);
      } finally {
        setLoading(false);
      }
    };

    getPopularProducts();
  }, []);

  return { products, loading, error };
};

/**
 * Оптимизированный хук для работы с товарами и категориями
 * Загружает все товары один раз и фильтрует их на стороне клиента
 */
export const useProductsOptimized = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Загрузка всех товаров и категорий один раз при инициализации
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Параллельная загрузка товаров и категорий для ускорения
        const [productsData, categoriesData] = await Promise.all([
          ApiService.getAllProductsAsync(),
          ApiService.getAllCategoriesAsync()
        ]);
        
        setAllProducts(productsData);
        setCategories(categoriesData);
        setError(null);
      } catch (err) {
        setError('Не удалось загрузить данные. Пожалуйста, попробуйте позже.');
        console.error('Ошибка при загрузке данных:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Фильтрация товаров по выбранной категории
  const filteredProducts = useMemo(() => {
    if (selectedCategoryId === null) {
      return allProducts; // Возвращаем все товары, если категория не выбрана
    }
    return allProducts.filter(product => product.categoryId === selectedCategoryId);
  }, [allProducts, selectedCategoryId]);

  return {
    products: filteredProducts,
    categories,
    loading,
    error,
    selectedCategoryId,
    setSelectedCategoryId,
    allProducts
  };
};
