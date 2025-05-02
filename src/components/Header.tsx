import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  const [isPartnerSite, setIsPartnerSite] = useState(false);
  const [partnerName, setPartnerName] = useState('');

  useEffect(() => {
    // Проверяем параметры URL
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source');
    const from = urlParams.get('from');
    
    if (source === 'partner' && from) {
      setIsPartnerSite(true);
      setPartnerName(from);
    }
  }, []);

  const handleReturnToPartner = () => {
    // Здесь должна быть логика возврата на сайт партнёра
    // Для демонстрации просто выводим сообщение
    alert(`Возврат на сайт: ${partnerName}`);
    
    // В реальном приложении здесь будет редирект на сайт партнёра
    // window.location.href = `https://${partnerName}?return=success`;
  };

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Volleyball" size={28} />
          <h1 className="text-2xl font-bold">Волейбол в Ейске</h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:underline">О нас</a></li>
            <li><a href="#upload" className="hover:underline">Загрузить</a></li>
            <li><a href="#gallery" className="hover:underline">Галерея</a></li>
            <li><a href="#partners" className="hover:underline">Партнёры</a></li>
          </ul>
        </nav>
        
        {isPartnerSite ? (
          <Button 
            variant="outline" 
            className="bg-transparent border-white hover:bg-white hover:text-blue-600"
            onClick={handleReturnToPartner}
          >
            <Icon name="ArrowLeft" className="mr-2" size={16} />
            Вернуться на {partnerName}
          </Button>
        ) : (
          <Button className="bg-amber-500 hover:bg-amber-600">
            Присоединиться
          </Button>
        )}
      </div>
      
      {isPartnerSite && (
        <div className="bg-blue-700 py-2 px-4 text-center text-sm">
          Вы перешли с сайта {partnerName}. Добро пожаловать на страницу волейбольной тусовки в Ейске!
        </div>
      )}
    </header>
  );
};

export default Header;