import { Product, Category } from "../types/api";

/**
 * Адаптирует продукт от API к формату, ожидаемому приложением
 */
export function adaptProduct(apiProduct: any): Product {
  return {
    id: apiProduct.id,
    name: apiProduct.name,
    description: apiProduct.description || "",
    price: apiProduct.price || 0,
    imageUrl: apiProduct.imagePath || apiProduct.imageUrl || "", // Поддерживает оба формата
    categoryId: apiProduct.categoryId || 0,
    categoryName: apiProduct.categoryName || "",
    isPopular: apiProduct.isPopular === true,
    inStock: apiProduct.inStock !== false,
    attributes: apiProduct.attributes || {}
  };
}

/**
 * Адаптирует массив продуктов от API
 */
export function adaptProducts(apiProducts: any[]): Product[] {
  return Array.isArray(apiProducts) 
    ? apiProducts.map(product => adaptProduct(product))
    : [];
}

/**
 * Адаптирует категорию от API к формату, ожидаемому приложением
 */
export function adaptCategory(apiCategory: any): Category {
  return {
    id: apiCategory.id,
    name: apiCategory.name,
    description: apiCategory.description || "",
    imageUrl: apiCategory.imageUrl || "",
    parentId: apiCategory.parentId || null,
    productCount: apiCategory.productCount || 0
  };
}

/**
 * Адаптирует массив категорий от API
 */
export function adaptCategories(apiCategories: any[]): Category[] {
  return Array.isArray(apiCategories) 
    ? apiCategories.map(category => adaptCategory(category))
    : [];
} 