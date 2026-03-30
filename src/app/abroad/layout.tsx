import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Зарубежная недвижимость | ОАЭ, Кипр, Бали | Фатюхин и Ко',
  description: 'Инвестиции в премиальную недвижимость за рубежом. Полный цикл: от подбора лотов до получения ВНЖ/ПМЖ и доверительного управления активами.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
