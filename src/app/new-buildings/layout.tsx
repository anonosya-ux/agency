import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Новостройки Москвы | Покупка от Застройщика — Фатюхин и Ко",
  description: "Подбор новостроек от ведущих застройщиков: SMINEX, Vesper, MR Group. Субсидированная ипотека, закрытые старты продаж. Элитные ЖК класса премиум.",
  openGraph: {
    title: "Новостройки Москвы | Элитные ЖК класса премиум",
    description: "Подбор новостроек от ведущих застройщиков: SMINEX, Vesper, MR Group. Субсидированная ипотека, закрытые старты продаж.",
    url: "https://fatukhin.ru/new-buildings",
  }
};

export default function NewBuildingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
