import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import UploadSection from '@/components/UploadSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <UploadSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;