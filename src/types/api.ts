export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  imagePath?: string;
  code?: string;
  categoryId: number;
  categoryName?: string;
  isPopular: boolean;
  inStock?: boolean;
  attributes?: Record<string, string>;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
  parentId?: number;
  productCount?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

export interface ApplicationDto {
  fullName: string;
  productId?: number;
  address?: string;
  phone: string;
  firstPayment: number;
  countMonth: number;
} 