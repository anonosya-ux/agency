import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'property',
  title: 'Недвижимость',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название (Заголовок)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'string',
      options: {
        list: [
          { title: 'Новостройка', value: 'new' },
          { title: 'Вторичное', value: 'secondary' },
          { title: 'Аренда', value: 'rent' },
          { title: 'Загородная', value: 'country' },
          { title: 'Коммерческая', value: 'commercial' },
          { title: 'Зарубежная', value: 'abroad' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'propertyClass',
      title: 'Класс объекта',
      type: 'string',
      options: {
        list: [
          { title: 'Комфорт', value: 'comfort' },
          { title: 'Бизнес', value: 'business' },
          { title: 'Премиум', value: 'premium' },
          { title: 'Элит', value: 'elit' },
        ],
      },
      hidden: ({ document }) => document?.category !== 'new' && document?.category !== 'secondary',
    }),
    defineField({
      name: 'developer',
      title: 'Застройщик',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Цена строкой (напр., от 15 000 000 ₽)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priceNum',
      title: 'Цена числом (для фильтрации)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Расположение (Адрес)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coordinates',
      title: 'Координаты на Яндекс Картах',
      type: 'object',
      fields: [
        { name: 'lat', type: 'number', title: 'Широта' },
        { name: 'lng', type: 'number', title: 'Долгота' }
      ]
    }),
    defineField({
      name: 'specs',
      title: 'Характеристики',
      type: 'object',
      fields: [
        { name: 'area', type: 'string', title: 'Площадь строкой' },
        { name: 'areaNum', type: 'number', title: 'Площадь числом (от)' },
        { name: 'beds', type: 'number', title: 'Кол-во спален (макс)' },
        { name: 'baths', type: 'number', title: 'Ванные' },
        { name: 'floors', type: 'string', title: 'Этажность' },
        { name: 'ceilings', type: 'string', title: 'Потолки' },
        { name: 'parking', type: 'string', title: 'Паркинг' },
        { name: 'completion', type: 'string', title: 'Сдача' },
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Главное фото',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Галерея изображений',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'features',
      title: 'Уникальные особенности',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tags',
      title: 'Теги',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'description',
      title: 'Описание объекта',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'mainImage',
    },
  },
})
