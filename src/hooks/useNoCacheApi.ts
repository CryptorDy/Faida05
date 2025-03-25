/**
 * Хук для выполнения API-запросов без кеширования,
 * решающий проблему с 304 Not Modified
 */

/**
 * Генерирует уникальный параметр для обхода кеширования
 */
export const generateNoCacheParam = (): string => {
  return `_nocache=${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
};

/**
 * Добавляет параметр nocache к URL для обхода кеширования
 */
export const addNoCacheParam = (url: string): string => {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${generateNoCacheParam()}`;
};

/**
 * Fetch с обходом кеширования
 */
export const fetchNoCache = async (url: string, options: RequestInit = {}): Promise<Response> => {
  const noCacheUrl = addNoCacheParam(url);
  
  // Добавляем заголовки против кеширования
  const headers = {
    ...options.headers,
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  };
  
  return fetch(noCacheUrl, {
    ...options,
    headers
  });
};

export default {
  fetchNoCache,
  addNoCacheParam,
  generateNoCacheParam
}; 