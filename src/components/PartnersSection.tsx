import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Partner {
  name: string;
  description: string;
  url: string;
  icon: string;
}

const partners: Partner[] = [
  {
    name: "Ваш сайт",
    description: "Вернуться на основной сайт",
    url: "#",
    icon: "ArrowLeft"
  },
  {
    name: "Пляжи Ейска",
    description: "Информация о пляжах города",
    url: "#",
    icon: "Umbrella"
  },
  {
    name: "Спортивный Ейск",
    description: "Спортивные события города",
    url: "#",
    icon: "Trophy"
  }
];

const PartnersSection: React.FC = () => {
  // Проверяем, есть ли параметр source в URL
  const urlParams = new URLSearchParams(window.location.search);
  const source = urlParams.get('source');
  const isFromPartnerSite = source === 'partner';

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Партнёры и переходы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Полезные ссылки на ресурсы наших партнёров
          </p>
        </div>
        
        {isFromPartnerSite && (
          <div className="mb-10 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-amber-100 rounded-full p-2 mr-3">
                <Icon name="Info" className="text-amber-600" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-amber-800">Вы перешли с партнёрского сайта</h3>
                <p className="text-amber-700 mt-1">
                  Добро пожаловать на сайт волейбольной тусовки Ейска! Вы можете вернуться назад по ссылке ниже.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 bg-blue-100 p-4 rounded-full">
                    <Icon name={partner.icon} size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <Button 
                    variant="outline" 
                    className="mt-2"
                    onClick={() => {
                      // Если это ваш сайт, добавляем параметр для возврата
                      if (index === 0) {
                        // Здесь вместо # должен быть URL вашего сайта
                        window.location.href = `${partner.url}?return=volleyball`;
                      } else {
                        window.location.href = partner.url;
                      }
                    }}
                  >
                    Перейти
                    {index === 0 && <Icon name="ExternalLink" size={16} className="ml-2" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Добавьте ссылку на ваш сайт</h3>
          <p className="mb-4 text-gray-600">
            Для перехода на наш сайт с вашего сайта используйте следующую ссылку 
            (замените YOUR_WEBSITE на имя вашего сайта):
          </p>
          <div className="bg-gray-100 p-3 rounded mb-4 font-mono text-sm overflow-x-auto">
            https://volleyball-eisk.ru/?source=partner&from=YOUR_WEBSITE
          </div>
          <p className="text-gray-600">
            При переходе с вашего сайта пользователь увидит специальное приветствие и 
            возможность легко вернуться обратно.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;