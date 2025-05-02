import React from 'react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface GalleryPhoto {
  id: number;
  url: string;
  title: string;
  date: string;
  likes: number;
}

const PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Закат на пляже в Ейске',
    date: '15 июля 2024',
    likes: 42
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1610805576320-c19f0896cf10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Утренняя тренировка',
    date: '22 июля 2024',
    likes: 37
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Командный дух',
    date: '29 июля 2024',
    likes: 56
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Вечерняя игра',
    date: '5 августа 2024',
    likes: 28
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1530915409450-e48b146cbd21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Пляжные страсти',
    date: '12 августа 2024',
    likes: 33
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1632955237463-c296ae2b1f76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'На волне позитива',
    date: '19 августа 2024',
    likes: 45
  }
];

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Галерея наших моментов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Лучшие фотографии с волейбольных тусовок на пляже в Ейске
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHOTOS.map(photo => (
            <div key={photo.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-full">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={photo.url} 
                    alt={photo.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </AspectRatio>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{photo.date}</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{photo.likes}</span>
                  </button>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Показать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;