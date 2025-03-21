import { Product, Category } from '../data/products';

// Mock data for development
import { products as mockProducts, categories as mockCategories } from '../data/products';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch all categories
export const fetchCategories = async (): Promise<Category[]> => {
  // Simulate API call
  await delay(800);
  return mockCategories;
};

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  // Simulate API call
  await delay(1000);
  return mockProducts;
};

// Fetch products by category
export const fetchProductsByCategory = async (categoryId: number): Promise<Product[]> => {
  // Simulate API call
  await delay(1000);
  return mockProducts.filter(product => {
    const category = mockCategories.find(c => c.id === categoryId);
    return category && product.category === category.name;
  });
};

// Fetch product by ID
export const fetchProductById = async (id: number): Promise<Product | null> => {
  // Simulate API call
  await delay(800);
  const product = mockProducts.find(p => p.id === id);
  return product || null;
};

// Fetch popular products
export const fetchPopularProducts = async (limit: number = 4): Promise<Product[]> => {
  // Simulate API call
  await delay(1000);
  // For mock data, we'll just return the first few products
  return mockProducts.slice(0, limit);
};
