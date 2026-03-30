import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Аренда элитной недвижимости в Москве | Фатюхин и Ко',
  description: 'Закрытая база особняков, пентхаусов и видовых апартаментов в Москве и Подмосковье. Гарантия конфиденциальности и премиальный сервис.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
