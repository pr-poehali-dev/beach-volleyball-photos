import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: 'Users',
      title: 'Сообщество',
      description: 'Присоединяйтесь к дружному сообществу любителей волейбола на пляже в Ейске'
    },
    {
      icon: 'Calendar',
      title: 'Регулярные встречи',
      description: 'Мы проводим регулярные встречи и турниры для игроков всех уровней'
    },
    {
      icon: 'Image',
      title: 'Фотоотчеты',
      description: 'Загружайте свои фотографии с мероприятий и делитесь яркими моментами'
    }
  ];

  return (
    <section id="about" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">О нашей тусовке</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Узнайте больше о сообществе любителей пляжного волейбола в Ейске и присоединяйтесь к нам!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Icon name={feature.icon} size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1583075773128-dfa2432dd4e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Волейбол на пляже" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4">Наша история</h3>
              <p className="text-gray-600 mb-6">
                Наше сообщество начало формироваться летом 2020 года, когда группа энтузиастов 
                начала регулярно собираться на пляже в Ейске для игры в волейбол. Со временем 
                к нам присоединялось всё больше участников, и сейчас мы проводим регулярные 
                встречи, турниры и развлекательные мероприятия.
              </p>
              <p className="text-gray-600 mb-6">
                Мы принимаем игроков всех уровней подготовки — от новичков до профессионалов. 
                Главное — это любовь к волейболу и желание весело провести время в хорошей компании!
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(num => (
                    <img 
                      key={num}
                      src={`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80`} 
                      alt={`User ${num}`} 
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <p className="text-blue-600 font-medium">+120 участников</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;