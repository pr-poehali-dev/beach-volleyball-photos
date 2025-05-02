import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative py-20 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1601512986351-9b0e01fcaff7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Волейбольная тусовка на пляже в Ейске</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Присоединяйтесь к нашему сообществу любителей пляжного волейбола! Загружайте свои фотографии с тусовок и делитесь яркими моментами.
        </p>
        <div className="flex justify-center space-x-4">
          <Button 
            className="bg-amber-500 hover:bg-amber-600 text-lg px-6 py-3"
            onClick={() => document.getElementById('upload')?.scrollIntoView({behavior: 'smooth'})}
          >
            Загрузить фото
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent border-white hover:bg-white hover:text-blue-600 text-lg px-6 py-3"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({behavior: 'smooth'})}
          >
            Смотреть галерею
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;