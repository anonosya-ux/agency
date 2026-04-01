import { Suspense } from 'react';
import CatalogClient from './CatalogClient';

export const metadata = {
  title: 'Каталог недвижимости | Фатюхин и Ко',
  description: 'Квартиры, дома, коммерческая и зарубежная недвижимость. Фильтрация по цене, площади, комнатам. Отображение на карте.',
};

export default function CatalogPage() {
  return (
    <Suspense fallback={
      <div className="h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text/50 text-sm">Загрузка каталога...</p>
        </div>
      </div>
    }>
      <CatalogClient />
    </Suspense>
  );
}
