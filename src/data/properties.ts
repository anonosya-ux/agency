export type PropertyCategory = 'new' | 'secondary' | 'rent' | 'country' | 'commercial' | 'land' | 'abroad';

export interface Property {
  id: string;
  category: string;
  title: string;
  developer?: string;
  propertyClass?: string;
  location: string;
  price: string;
  priceNum: number;
  specs: {
    beds?: number;
    baths?: number;
    area: string;
    areaNum: number;
    floors?: string;
    ceilings?: string;
    parking?: string;
    completion?: string;
  };
  image: string;
  gallery?: string[];
  description?: string;
  features?: string[];
  tags?: string[];
  coordinates?: [number, number]; // [latitude, longitude] for the Map
}

export const properties: Property[] = [
  // === НОВЫЕ ЖК В КАТАЛОГЕ ===
  {
    id: 'zhk-one',
    category: 'new',
    title: 'ЖК ONE',
    developer: 'MR Group',
    propertyClass: 'premium',
    location: 'Москва, 1-й Красногвардейский пр., 13',
    price: 'от 45 000 000 ₽',
    priceNum: 45000000,
    specs: { beds: 3, area: '33 – 200+ м²', areaNum: 33, floors: '94 этажа', ceilings: 'до 4 м', parking: 'Подземный', completion: '2027' },
    image: 'https://images.unsplash.com/photo-1600607687931-ce8e00280f55?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop'
    ],
    description: 'ONE — небоскрёб премиум-класса в Москва-Сити с уникальным архитектурным решением и 94 этажами. Резидентов ждёт роскошная инфраструктура: Sky Garden на высоте птичьего полёта, панорамные виды на реку и центр города.',
    features: ['Sky Garden на 85 этаже', 'Панорамное остекление', 'Sky Bridge', 'White Box отделка', 'Фитнес-центр'],
    tags: ['Премиум', 'Москва-Сити', 'Видовой', 'Sky Garden'],
    coordinates: [55.7494, 37.5351]
  },
  {
    id: 'zhk-badaevskiy',
    category: 'new',
    title: 'ЖК Бадаевский',
    developer: 'Capital Group',
    propertyClass: 'elit',
    location: 'Москва, Набережная Тараса Шевченко',
    price: 'от 64 000 000 ₽',
    priceNum: 64000000,
    specs: { beds: 4, area: '60 – 300+ м²', areaNum: 60, floors: '2-18 этажей', ceilings: 'до 5.7 м', parking: 'Подземный (1380 мест)', completion: '2028' },
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop'
    ],
    description: 'Уникальный проект от Herzog & de Meuron. Сочетает исторические корпуса пивоваренного завода с парящими новыми корпусами на 35-метровых колоннах.',
    features: ['Парящие здания', 'Историческое наследие', 'Собственная набережная', 'Частный парк-лес', 'Потолки до 5.7 м'],
    tags: ['Элит', 'Набережная', 'Историческое', 'Herzog & de Meuron'],
    coordinates: [55.7436, 37.5542]
  },
  {
    id: 'zhk-very',
    category: 'new',
    title: 'ЖК VERY',
    developer: 'ГК Основа',
    propertyClass: 'business',
    location: 'Москва, Ботаническая ул., 29А',
    price: 'от 16 300 000 ₽',
    priceNum: 16300000,
    specs: { beds: 2, area: '25 – 90+ м²', areaNum: 25, floors: 'Кварталы', ceilings: 'до 3 м', parking: 'Подземный', completion: '2026' },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop'
    ],
    description: 'ЖК VERY — это эко-квартал рядом с Ботаническим садом. Более 77% территории выделено под лесной массив, парки и зоны отдыха. Настоящий оазис бизнес-класса.',
    features: ['77% площади — зелень', 'Вид на Ботанический сад', 'Панорамные окна', 'Детский сад на территории', 'Фитнес-центр со SPA'],
    tags: ['Бизнес-класс', 'Эко', 'Ботанический сад', 'Панорамные окна'],
    coordinates: [55.8352, 37.5802]
  },
  {
    id: 'zhk-metropolia',
    category: 'new',
    title: 'ЖК Метрополия',
    developer: 'MR Group',
    propertyClass: 'business',
    location: 'Москва, Южнопортовый район (ЮВАО)',
    price: 'от 14 000 000 ₽',
    priceNum: 14000000,
    specs: { beds: 2, area: '25 – 120+ м²', areaNum: 25, floors: '7-30 этажей', ceilings: 'от 2.77 м', parking: 'Подземный', completion: '2025' },
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600607687931-ce8e00280f55?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop'
    ],
    description: 'Современный квартал бизнес-класса от архитектурного бюро SPEECH. Строгий клинкерный кирпич, закрытая территория и развитая инфраструктура: от кафе до школ.',
    features: ['Клинкерные фасады', 'Двор без машин', 'White Box', 'МЦК Угрешская в шаговой доступности', 'Детский сад'],
    tags: ['Бизнес-класс', 'Квартал', 'Двор без машин', 'White Box'],
    coordinates: [55.7112, 37.6637]
  },
  {
    id: 'zhk-river-park',
    category: 'new',
    title: 'ЖК Ривер Парк Коломенское',
    developer: 'AEON Development',
    propertyClass: 'business',
    location: 'Москва, Корабельная ул. (Нагатинский Затон)',
    price: 'от 13 000 000 ₽',
    priceNum: 13000000,
    specs: { beds: 3, area: '22 – 100+ м²', areaNum: 22, floors: 'Среднеэтажный', ceilings: 'до 3.3 м', parking: 'Подземный', completion: '2026' },
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop'
    ],
    description: 'Масштабный проект на берегу Москвы-реки с собственной прогулочной набережной вдоль воды и пляжем. Наслаждайтесь жизнью вблизи парка Коломенское.',
    features: ['Собственная набережная', 'Панорамные окна', 'Лоты с террасами', 'Школа и детские сады'],
    tags: ['Набережная', 'Москва-река', 'Панорамное остекление', 'Террасы'],
    coordinates: [55.6780, 37.6580]
  },
  {
    id: 'zhk-ostrov',
    category: 'new',
    title: 'ЖК Остров',
    developer: 'Донстрой',
    propertyClass: 'business',
    location: 'Москва, Мневниковская пойма (СЗАО)',
    price: 'от 18 000 000 ₽',
    priceNum: 18000000,
    specs: { beds: 4, area: '22 – 300+ м²', areaNum: 22, floors: '5-24 этажа', ceilings: 'от 3 м', parking: 'Подземный', completion: '2029' },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop'
    ],
    description: 'ЖК Остров в Мневниковской пойме объединяет природу и город. Концепция "15-минутный город", новая станция метро и богатая инфраструктура делают его одним из самых востребованных проектов.',
    features: ['Концепция "15-мин город"', 'Метро "Терехово"', 'Квартиры с каминами', 'Авторская чистовая отделка', 'Лаунж-зоны и коворкинги'],
    tags: ['Бизнес-класс', 'Мневники', 'Эко', '15 минут'],
    coordinates: [55.7650, 37.4620]
  },
  {
    id: 'zhk-zelenaya-vertical',
    category: 'new',
    title: 'ЖК Зелёная Вертикаль',
    developer: 'Э.К. Девелопмент',
    propertyClass: 'comfort',
    location: 'Москва, Варшавское ш., 170Е',
    price: 'от 13 000 000 ₽',
    priceNum: 13000000,
    specs: { beds: 2, area: '25 – 80+ м²', areaNum: 25, floors: '19-26 этажей', ceilings: 'до 2.7 м', parking: 'Наземный', completion: 'Сдан' },
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop'
    ],
    description: 'Комфорт-класс рядом с Битцевским и Бутовским лесопарками. Экологичный и чистый воздух, развитый район. Объект полностью сдан в эксплуатацию.',
    features: ['Рядом лес', 'Готовый комплекс', 'Школы и сады'],
    tags: ['Комфорт-класс', 'Сдан', 'Лесопарк', 'Метро 5 мин'],
    coordinates: [55.5990, 37.6050]
  },
  {
    id: 'zhk-seliger',
    category: 'new',
    title: 'ЖК Селигер Сити',
    developer: 'MR Group',
    propertyClass: 'business',
    location: 'Москва, Ильменский пр. (САО)',
    price: 'от 14 500 000 ₽',
    priceNum: 14500000,
    specs: { beds: 3, area: '22 – 100+ м²', areaNum: 22, floors: '6-45 этажей', ceilings: '2.85 м', parking: 'Подземный', completion: '2026' },
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd15?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop'
    ],
    description: 'Масштабный ЖК с собственным искусственным водоёмом, пляжем и гигантским двором-парком. Архитектура от голландского бюро MLA+.',
    features: ['Искусственный водоём', 'Собственный пляж', 'Двор-парк WowHaus', 'Метро "Селигерская" в 2 мин'],
    tags: ['Бизнес-класс', 'Водоём', 'Двор-парк', 'Метро 2 мин'],
    coordinates: [55.8480, 37.5228]
  },
  {
    id: 'zhk-luchi',
    category: 'new',
    title: 'ЖК Лучи',
    developer: 'Группа ЛСР',
    propertyClass: 'comfort',
    location: 'Москва, Производственная ул.',
    price: 'от 8 000 000 ₽',
    priceNum: 8000000,
    specs: { beds: 3, area: '20 – 80+ м²', areaNum: 20, floors: '5-25 этажей', ceilings: 'до 2.8 м', parking: 'Подземный', completion: '2025' },
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop'
    ],
    description: 'Жилой комплекс «Лучи» в Солнцево: комфорт-класс от надежного застройщика ЛСР. В окружении Чоботовского леса и с быстрой доступностью метро.',
    features: ['Вблизи ст. м. Солнцево', 'Чистовая отделка', 'Дворы без машин', 'Чоботовский лес', 'Школы и садики в проекте'],
    tags: ['Комфорт-класс', 'Метро рядом', 'С отделкой', 'Экология'],
    coordinates: [55.6520, 37.3980]
  },
  {
    id: 'zhk-preobr',
    category: 'new',
    title: 'ЖК Преображение',
    developer: 'ГК INGRAD',
    propertyClass: 'comfort',
    location: 'Москва, Тюменский пр. (ВАО)',
    price: 'от 12 000 000 ₽',
    priceNum: 12000000,
    specs: { beds: 3, area: '22 – 90+ м²', areaNum: 22, floors: '7-31 этажей', ceilings: 'от 2.8 м', parking: 'Подземный', completion: 'Сдан' },
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop'
    ],
    description: 'Сданный жилой комплекс у метро Бульвар Рокоссовского и Национального парка Лосиный остров. Хорошая транспортная и экологическая доступность.',
    features: ['Монолитные дома', 'Лосиный остров рядом', 'Спортобъекты', 'Детские сады на территории'],
    tags: ['Комфорт-класс', 'Сдан', 'Лосиный остров', 'Метро 3 мин'],
    coordinates: [55.8120, 37.7250]
  },

  // === ВТОРИЧНОЕ ЖИЛЬЁ ===
  {
    id: 'sec-1',
    category: 'secondary',
    title: '2-комн. квартира, ул. Буракова 15/1',
    location: 'Москва, ВАО',
    price: '14 800 000 ₽',
    priceNum: 14800000,
    specs: { beds: 2, baths: 1, area: '54 м²', areaNum: 54 },
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop',
    coordinates: [55.7651, 37.7302],
  },
  {
    id: 'sec-2',
    category: 'secondary',
    title: '2-комн. квартира, Б. Переяславская 17',
    location: 'Москва, СВАО',
    price: '19 500 000 ₽',
    priceNum: 19500000,
    specs: { beds: 2, baths: 1, area: '62 м²', areaNum: 62 },
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop',
    coordinates: [55.7865, 37.6401],
  },

  // === АРЕНДА ===
  {
    id: 'rent-1',
    category: 'rent',
    title: 'Дом в с. Ромашково, ул. Светлая 44',
    location: 'МО, Одинцовский р-н',
    price: '350 000 ₽ / мес',
    priceNum: 350000,
    specs: { beds: 4, baths: 3, area: '280 м²', areaNum: 280 },
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop',
    coordinates: [55.7329, 37.3371],
  },

  // === ЗАГОРОДНАЯ ===
  {
    id: 'coun-1',
    category: 'country',
    title: 'Особняк в Барвихе',
    location: 'МО, Рублево-Успенское ш.',
    price: '150 000 000 ₽',
    priceNum: 150000000,
    specs: { beds: 5, baths: 4, area: '450 м²', areaNum: 450 },
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
    coordinates: [55.7423, 37.2694],
  },

  // === КОММЕРЧЕСКАЯ ===
  {
    id: 'com-1',
    category: 'commercial',
    title: 'Эко-Гостиница Краснодарский край',
    location: 'Краснодарский край',
    price: 'По запросу',
    priceNum: 0,
    specs: { area: '1200 м²', areaNum: 1200 },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    description: 'Действующий арендный бизнес с высокой круглогодичной рентабельностью.',
    coordinates: [43.6028, 39.7342],
  },
  
  // === ЗАРУБЕЖНАЯ НЕДВИЖИМОСТЬ (Таиланд) ===
  {
    id: 'abr-1',
    category: 'abroad',
    title: 'Fantasea Condo Rawai',
    location: 'Таиланд, Пхукет, Раваи',
    price: 'от 3 339 600 THB (~9 млн ₽)',
    priceNum: 9000000,
    specs: { beds: 1, baths: 1, area: '34 м²', areaNum: 34 },
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop',
    description: 'Инфинити бассейн, коворкинг, фитнес. Доход от аренды от 8%. Беспроцентная рассрочка на период стройки.',
    features: ['Инфинити бассейн', 'Фитнес-зал', 'Коворкинг и кафе', 'Сдача 4 кв. 2027', 'Рассрочка 0%'],
    coordinates: [7.7766, 98.3242],
  },
  // === ЗАРУБЕЖНАЯ НЕДВИЖИМОСТЬ (Кипр) ===
  {
    id: 'abr-cyprus-1',
    category: 'abroad',
    title: 'Phuket Health & Wellness Resort',
    developer: 'Cyprus Constructions',
    propertyClass: 'premium',
    location: 'Северный Кипр',
    price: 'от £175,000',
    priceNum: 20125000,
    specs: { beds: 1, baths: 1, area: '47 – 365 м²', areaNum: 47, completion: '2027-2028' },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    description: 'Премиальный оздоровительный резорт на Северном Кипре. Уникальная концепция с интегрированными медицинскими клиниками, центрами красоты и обширными зонами для активного отдыха на природе.',
    features: [
      'Клиники и Yoga Center',
      'SPA, Хамам и Сауна',
      'Крытый бассейн',
      'Теннисный корт',
      'Рассрочка до января 2028'
    ],
    tags: ['Кипр', 'Wellness', 'Премиум', 'Рассрочка'],
    coordinates: [35.3395, 33.3150]
  }
];
