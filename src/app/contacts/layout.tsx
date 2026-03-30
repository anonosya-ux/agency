import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Контакты | Фатюхин и Ко — Агентство Недвижимости",
  description: "Свяжитесь с агентством недвижимости Фатюхин и Ко. Офис: Москва, пл. Журавлёва (м. Электрозаводская). Тел: +7 (995) 113-89-37. Пн-Пт: 08:00–21:00.",
  openGraph: {
    title: "Контакты | Фатюхин и Ко",
    description: "Наш офис находится в Москва, пл. Журавлёва (м. Электрозаводская). Ждем вас для обсуждения инвестиций в элитную недвижимость.",
    url: "https://fatukhin.ru/contacts",
  }
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
