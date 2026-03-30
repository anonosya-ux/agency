import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Подбор элитной недвижимости | Купить квартиру в Москве | Фатюхин и Ко',
  description: 'Доступ к закрытым пулам застройщиков (off-market) и ликвидным объектам Москвы с премиальным дисконтом. Юридическая гарантия и формирование инвест-портфеля.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
