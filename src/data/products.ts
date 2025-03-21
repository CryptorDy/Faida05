export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features?: string[];
  specifications?: Record<string, string>;
}

export interface Category {
  id: number;
  name: string;
}

export const categories: Category[] = [
  { id: 1, name: 'Смартфоны' },
  { id: 2, name: 'Ноутбуки' },
  { id: 3, name: 'Бытовая техника' },
  { id: 4, name: 'Телевизоры' },
  { id: 5, name: 'Аксессуары' }
];

export const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 13 Pro Max 256GB',
    description: 'Мощный смартфон с отличной камерой и производительностью',
    price: 129990,
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80',
    category: 'Смартфоны',
    features: [
      'Процессор A15 Bionic',
      'Дисплей Super Retina XDR 6.7"',
      'Тройная камера Pro 12MP',
      'Память 256GB'
    ],
    specifications: {
      'Дисплей': '6.7" Super Retina XDR',
      'Процессор': 'A15 Bionic',
      'Память': '256GB',
      'Основная камера': 'Тройная 12MP',
      'Фронтальная камера': '12MP',
      'Аккумулятор': '4352 мАч',
      'Операционная система': 'iOS 15'
    }
  },
  {
    id: 2,
    name: 'Samsung Galaxy S22 Ultra 512GB',
    description: 'Флагманский смартфон с поддержкой S Pen и мощной камерой',
    price: 119990,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    category: 'Смартфоны',
    features: [
      'Процессор Snapdragon 8 Gen 1',
      'Дисплей Dynamic AMOLED 2X 6.8"',
      'Камера 108MP',
      'Поддержка S Pen'
    ],
    specifications: {
      'Дисплей': '6.8" Dynamic AMOLED 2X',
      'Процессор': 'Snapdragon 8 Gen 1',
      'Память': '512GB',
      'Основная камера': 'Quad 108MP',
      'Фронтальная камера': '40MP',
      'Аккумулятор': '5000 мАч',
      'Операционная система': 'Android 12'
    }
  },
  {
    id: 3,
    name: 'MacBook Pro 14" M1 Pro',
    description: 'Профессиональный ноутбук с революционным процессором Apple M1 Pro',
    price: 189990,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80',
    category: 'Ноутбуки',
    features: [
      'Процессор Apple M1 Pro',
      'Дисплей Liquid Retina XDR 14"',
      'Память 16GB',
      'SSD 512GB'
    ],
    specifications: {
      'Дисплей': '14" Liquid Retina XDR',
      'Процессор': 'Apple M1 Pro',
      'Оперативная память': '16GB',
      'Накопитель': 'SSD 512GB',
      'Графика': 'Встроенная 16-ядерная',
      'Операционная система': 'macOS Monterey'
    }
  },
  {
    id: 4,
    name: 'Dell XPS 15 9520',
    description: 'Премиальный ноутбук с мощным процессором и отличным дисплеем',
    price: 159990,
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    category: 'Ноутбуки',
    features: [
      'Процессор Intel Core i7-12700H',
      'Дисплей 15.6" OLED 3.5K',
      'Память 32GB',
      'SSD 1TB'
    ],
    specifications: {
      'Дисплей': '15.6" OLED 3.5K',
      'Процессор': 'Intel Core i7-12700H',
      'Оперативная память': '32GB',
      'Накопитель': 'SSD 1TB',
      'Графика': 'NVIDIA GeForce RTX 3050 Ti',
      'Операционная система': 'Windows 11 Pro'
    }
  },
  {
    id: 5,
    name: 'Sony Bravia XR A80J 65"',
    description: 'OLED телевизор с технологией XR OLED Contrast и Cognitive Processor XR',
    price: 249990,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Телевизоры',
    features: [
      'OLED дисплей 65"',
      'Процессор Cognitive Processor XR',
      'Google TV',
      'Поддержка Dolby Vision и Atmos'
    ],
    specifications: {
      'Диагональ': '65"',
      'Разрешение': '4K UHD (3840x2160)',
      'Тип матрицы': 'OLED',
      'Процессор': 'Cognitive Processor XR',
      'Smart TV': 'Google TV',
      'HDR': 'Dolby Vision, HDR10, HLG'
    }
  },
  {
    id: 6,
    name: 'Samsung QN90A Neo QLED 55"',
    description: 'Телевизор с технологией Neo QLED и процессором Neo Quantum 4K',
    price: 179990,
    image: 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80',
    category: 'Телевизоры',
    features: [
      'Neo QLED дисплей 55"',
      'Процессор Neo Quantum 4K',
      'Tizen OS',
      'Технология Quantum HDR 32x'
    ],
    specifications: {
      'Диагональ': '55"',
      'Разрешение': '4K UHD (3840x2160)',
      'Тип матрицы': 'Neo QLED',
      'Процессор': 'Neo Quantum 4K',
      'Smart TV': 'Tizen OS',
      'HDR': 'Quantum HDR 32x, HDR10+'
    }
  },
  {
    id: 7,
    name: 'Dyson V15 Detect Absolute',
    description: 'Беспроводной пылесос с лазерным обнаружением пыли и умной автоматикой',
    price: 69990,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Бытовая техника',
    features: [
      'Мощность всасывания до 240 AW',
      'Лазерное обнаружение пыли',
      'HEPA-фильтрация',
      'До 60 минут работы'
    ],
    specifications: {
      'Тип': 'Беспроводной',
      'Мощность всасывания': 'до 240 AW',
      'Время работы': 'до 60 минут',
      'Емкость контейнера': '0.76 л',
      'Фильтрация': 'HEPA',
      'Вес': '3 кг'
    }
  },
  {
    id: 8,
    name: 'Bose QuietComfort 45',
    description: 'Беспроводные наушники с активным шумоподавлением и высоким качеством звука',
    price: 29990,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80',
    category: 'Аксессуары',
    features: [
      'Активное шумоподавление',
      'Время работы до 24 часов',
      'Bluetooth 5.1',
      'Быстрая зарядка'
    ],
    specifications: {
      'Тип': 'Накладные, беспроводные',
      'Время работы': 'до 24 часов',
      'Bluetooth': '5.1',
      'Шумоподавление': 'Активное',
      'Быстрая зарядка': '15 минут = 3 часа работы',
      'Вес': '240 г'
    }
  },
  {
    id: 9,
    name: 'Apple Watch Series 7 45mm',
    description: 'Умные часы с большим всегда включенным дисплеем и функциями мониторинга здоровья',
    price: 39990,
    image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80',
    category: 'Аксессуары',
    features: [
      'Дисплей Retina Always-On',
      'Мониторинг ЭКГ и кислорода в крови',
      'Водонепроницаемость до 50м',
      'Быстрая зарядка'
    ],
    specifications: {
      'Размер': '45 мм',
      'Дисплей': 'Retina Always-On',
      'Процессор': 'Apple S7',
      'Память': '32 ГБ',
      'Водонепроницаемость': 'до 50 м',
      'Время работы': 'до 18 часов'
    }
  },
  {
    id: 10,
    name: 'LG OLED C1 65"',
    description: 'OLED телевизор с процессором α9 Gen4 AI и поддержкой NVIDIA G-SYNC',
    price: 199990,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Телевизоры',
    features: [
      'OLED дисплей 65"',
      'Процессор α9 Gen4 AI',
      'webOS Smart TV',
      'NVIDIA G-SYNC, FreeSync Premium'
    ],
    specifications: {
      'Диагональ': '65"',
      'Разрешение': '4K UHD (3840x2160)',
      'Тип матрицы': 'OLED',
      'Процессор': 'α9 Gen4 AI',
      'Smart TV': 'webOS',
      'HDR': 'Dolby Vision, HDR10, HLG'
    }
  },
  {
    id: 11,
    name: 'Samsung Galaxy Tab S8 Ultra',
    description: 'Премиальный планшет с большим AMOLED дисплеем и поддержкой S Pen',
    price: 99990,
    image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    category: 'Смартфоны',
    features: [
      'Дисплей Super AMOLED 14.6"',
      'Процессор Snapdragon 8 Gen 1',
      'Память 16GB RAM, 512GB',
      'S Pen в комплекте'
    ],
    specifications: {
      'Дисплей': '14.6" Super AMOLED',
      'Процессор': 'Snapdragon 8 Gen 1',
      'Оперативная память': '16GB',
      'Накопитель': '512GB',
      'Камеры': 'Основная 13MP + 6MP, фронтальная 12MP + 12MP',
      'Аккумулятор': '11200 мАч'
    }
  },
  {
    id: 12,
    name: 'Bosch Serie 6 WAT286H0OE',
    description: 'Стиральная машина с технологией i-DOS и интеллектуальными программами стирки',
    price: 79990,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    category: 'Бытовая техника',
    features: [
      'Технология i-DOS',
      'Загрузка 9 кг',
      'Скорость отжима 1400 об/мин',
      'Класс энергопотребления A+++'
    ],
    specifications: {
      'Тип': 'Фронтальная загрузка',
      'Максимальная загрузка': '9 кг',
      'Скорость отжима': 'до 1400 об/мин',
      'Класс энергопотребления': 'A+++',
      'Уровень шума': '49 дБ',
      'Габариты (ВxШxГ)': '84.8x59.8x59 см'
    }
  }
];
