import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "О Компании Фатюхин и Ко | Элитное Агентство Недвижимости",
  description: "Узнайте историю агентства элитной недвижимости Фатюхин и Ко. Наша команда, награды, миссия и ценности. 500+ сделок, 15 лет на рынке.",
  openGraph: {
    title: "О Компании | Фатюхин и Ко",
    description: "Бутиковое агентство элитной недвижимости в Москва. Экспертиза, конфиденциальность, выдающиеся результаты.",
    url: "https://fatukhin.ru/about",
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
