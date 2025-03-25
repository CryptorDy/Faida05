/**
 * Утилиты для форматирования данных
 */

/**
 * Форматирует номер телефона в российском формате: +7 (XXX) XXX-XX-XX
 */
export const formatPhoneNumber = (value: string): string => {
  // Удаляем все нецифровые символы
  const phoneDigits = value.replace(/\D/g, '');
  
  // Если номер пустой, возвращаем пустую строку
  if (!phoneDigits) return '';
  
  // Если номер начинается с 8 или 7, заменяем на +7
  let formattedPhone = '';
  
  if (phoneDigits.length === 0) {
    return '';
  } else if (phoneDigits.length <= 1) {
    return `+${phoneDigits}`;
  } else if (phoneDigits.length <= 4) {
    return `+7 (${phoneDigits.substring(1)}`;
  } else if (phoneDigits.length <= 7) {
    return `+7 (${phoneDigits.substring(1, 4)}) ${phoneDigits.substring(4)}`;
  } else if (phoneDigits.length <= 9) {
    return `+7 (${phoneDigits.substring(1, 4)}) ${phoneDigits.substring(4, 7)}-${phoneDigits.substring(7)}`;
  } else {
    return `+7 (${phoneDigits.substring(1, 4)}) ${phoneDigits.substring(4, 7)}-${phoneDigits.substring(7, 9)}-${phoneDigits.substring(9, 11)}`;
  }
};

/**
 * Обработчик ввода номера телефона с автоформатированием
 */
export const handlePhoneInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: (value: string) => void
): void => {
  const input = e.target;
  const selectionStart = input.selectionStart;
  const previousLength = input.value.length;
  
  const formattedValue = formatPhoneNumber(input.value);
  setValue(formattedValue);
  
  // Восстанавливаем позицию курсора после форматирования
  setTimeout(() => {
    if (selectionStart !== null) {
      const newPosition = selectionStart + (formattedValue.length - previousLength);
      input.setSelectionRange(newPosition, newPosition);
    }
  }, 0);
}; 