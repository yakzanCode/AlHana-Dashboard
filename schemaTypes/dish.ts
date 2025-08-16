import {defineType, defineField} from 'sanity'

export const dish = defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
    defineField({
      name: 'mainDish',
      title: 'Main Dish',
      type: 'boolean',
      description: 'Set true if this is the main dish'
    }),
    defineField({
      name: 'isAvailable',
      title: 'Is Available',
      type: 'boolean',
      description: 'Set false if the dish is currently unavailable'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', 
        maxLength: 96,
        isUnique: (slug, ctx) => ctx.defaultIsUnique(slug, ctx)
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'feedbacks',
      title: 'Feedbacks',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'feedBack' }] }],
      description: 'Feedback left by users for this dish'
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.[0]'
    }
  }
})
