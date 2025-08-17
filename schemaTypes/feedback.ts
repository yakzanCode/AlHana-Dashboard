import { defineType, defineField } from 'sanity'

export const feedBack = defineType({
  name: 'feedBack',
  title: 'Feedback',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dish',
      title: 'Dish',
      type: 'reference',
      to: [{ type: 'dish' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'message',
      title: 'Feedback Message',
      type: 'text',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'message',
      subtitle: 'rating',
      media: 'user.avatar',
    },
  },
})
