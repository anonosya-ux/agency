import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Каталог Элитной Недвижимости | Москва, Дубай — Фатюхин и Ко",
  description: "Полный каталог элитной недвижимости: квартиры, пентхаусы, виллы в Москве и за рубежом. Фильтрация по цене, площади и локации.",
  openGraph: {
    title: "Каталог Элитной Недвижимости | Фатюхин и Ко",
    description: "Наш эксклюзивный каталог премиальной недвижимости в Москве, ОАЭ, Кипре и других странах.",
    url: "https://fatukhin.ru/catalog",
  }
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
