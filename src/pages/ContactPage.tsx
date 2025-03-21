import React, { useEffect } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ContactPage: React.FC = () => {
  // Координаты для маркера на карте (указанные в задании)
  const mapPosition = [42.570583, 47.571242];
  
  // Исправляем проблему с иконками маркеров Leaflet
  useEffect(() => {
    // @ts-ignore - Используем ts-ignore для обхода проблемы с типами в Leaflet
    delete L.Icon.Default.prototype._getIconUrl;
    
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Контакты</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Блок с контактной информацией */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4">
                <Phone className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Телефон</h3>
                <a href="tel:+79634096111" className="text-indigo-600 hover:underline text-lg">+7 (963) 409-61-11</a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4">
                <Mail className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Email</h3>
                <a href="mailto:info@rassrochka.plus" className="text-indigo-600 hover:underline text-lg">info@rassrochka.plus</a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Время работы</h3>
                <p className="text-gray-700 text-lg">Пн-Вс: 9:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Карта */}
        <div className="h-[450px] w-full overflow-hidden rounded-xl shadow-md">
          <MapContainer 
            center={mapPosition as [number, number]} 
            zoom={14} 
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={mapPosition as [number, number]}>
              <Popup>
                Наш офис находится здесь!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
