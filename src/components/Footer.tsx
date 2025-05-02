import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Icon name="Volleyball" className="mr-2" size={20} />
              Волейбол в Ейске
            </h3>
            <p className="mb-4 text-blue-200">
              Сообщество любителей пляжного волейбола в Ейске. 
              Присоединяйтесь к нашим тусовкам на пляже!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300">
                <Icon name="Instagram" size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <Icon name="Facebook" size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <Icon name="Twitter" size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <Icon name="Telegram" size={24} />
                <span className="sr-only">Telegram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Карта сайта</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Главная</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white">О нас</a></li>
              <li><a href="#upload" className="text-blue-200 hover:text-white">Загрузить фото</a></li>
              <li><a href="#gallery" className="text-blue-200 hover:text-white">Галерея</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Icon name="MapPin" className="mr-2" size={18} />
                <span>Пляж, город Ейск</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="mr-2" size={18} />
                <span>+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="mr-2" size={18} />
                <span>volleyball@eisk-beach.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} Волейбол в Ейске. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;