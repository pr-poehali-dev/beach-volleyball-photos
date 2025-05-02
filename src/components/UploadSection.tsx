import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const UploadSection: React.FC = () => {
  const [fileName, setFileName] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы код для загрузки на сервер
    alert('Фотография успешно загружена! В будущем здесь будет настоящая загрузка на сервер.');
    setFileName('');
    setPreviewUrl(null);
  };
  
  return (
    <section id="upload" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Поделитесь своими моментами</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Загружайте свои лучшие фотографии с волейбольных тусовок на пляже в Ейске
            и делитесь воспоминаниями с сообществом.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <Label htmlFor="photo" className="block mb-2">
                Выберите фотографию
              </Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition duration-200">
                <input
                  id="photo"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label htmlFor="photo" className="cursor-pointer">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="max-h-64 mx-auto rounded-md" />
                  ) : (
                    <div className="flex flex-col items-center">
                      <Icon name="Image" size={64} className="text-gray-400 mb-3" />
                      <span className="text-gray-500">Перетащите фото сюда или нажмите для выбора</span>
                    </div>
                  )}
                </label>
                {fileName && <p className="mt-2 text-gray-600">{fileName}</p>}
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="title" className="block mb-2">
                Название фотографии
              </Label>
              <Input id="title" placeholder="Например: Вечерняя игра 15 июля" />
            </div>
            
            <div className="mb-6">
              <Label htmlFor="description" className="block mb-2">
                Описание
              </Label>
              <Textarea 
                id="description" 
                placeholder="Расскажите историю этой фотографии..."
                rows={3}
              />
            </div>
            
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Загрузить фотографию
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;