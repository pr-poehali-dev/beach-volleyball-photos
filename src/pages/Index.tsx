import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import UploadSection from '@/components/UploadSection';
import GallerySection from '@/components/GallerySection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  // Проверяем параметры URL при загрузке страницы
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source');
    const from = urlParams.get('from');
    
    // Если есть параметры перехода, можно показать специальное приветствие или выполнить другие действия
    if (source === 'partner' && from) {
      console.log(`Пользователь перешел с сайта: ${from}`);
      // Здесь можно добавить код для показа специального приветствия
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <UploadSection />
        <GallerySection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;