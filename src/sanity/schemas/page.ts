import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Страница сайта',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок страницы (H1)',
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
      name: 'seoTitle',
      title: 'SEO Заголовок (Title)',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Описание (Meta Description)',
      type: 'text',
    }),
    defineField({
      name: 'blocks',
      title: 'Контентные блоки',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'heroBanner',
          title: 'Главный баннер (Hero)',
          fields: [
            { name: 'heading', type: 'string', title: 'Заголовок' },
            { name: 'subheading', type: 'string', title: 'Подзаголовок' },
            { name: 'image', type: 'image', title: 'Фоновое изображение', options: { hotspot: true } },
            { name: 'buttonText', type: 'string', title: 'Текст кнопки' },
            { name: 'buttonLink', type: 'string', title: 'Ссылка кнопки' },
          ]
        },
        {
          type: 'object',
          name: 'textBlock',
          title: 'Писательский блок (Текст)',
          fields: [
            { name: 'heading', type: 'string', title: 'Заголовок блока' },
            { name: 'content', type: 'array', of: [{ type: 'block' }], title: 'Содержимое' }
          ]
        }
      ]
    })
  ],
})
