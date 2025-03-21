import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = '', 
  className = '',
  children
}) => {
  // Format phone number to ensure it starts with +7
  const formattedPhone = phoneNumber.startsWith('+') 
    ? phoneNumber.replace(/\D/g, '') 
    : `7${phoneNumber.replace(/^7|^8|\D/g, '')}`;
  
  // Create WhatsApp URL with phone and encoded message
  const whatsappUrl = `https://wa.me/+${formattedPhone}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center justify-center text-white transition-all duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default WhatsAppButton;
