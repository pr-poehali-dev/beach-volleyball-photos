import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Volleyball" size={28} />
          <h1 className="text-2xl font-bold">Волейбол в Ейске</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:underline">О нас</a></li>
            <li><a href="#upload" className="hover:underline">Загрузить</a></li>
            <li><a href="#gallery" className="hover:underline">Галерея</a></li>
          </ul>
        </nav>
        <Button className="bg-amber-500 hover:bg-amber-600">
          Присоединиться
        </Button>
      </div>
    </header>
  );
};

export default Header;