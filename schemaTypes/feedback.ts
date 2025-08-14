// schemas/feedback.js
import { defineType, defineField } from 'sanity'

export const feedback = defineType({
  name: 'feedback',
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
      description: 'The dish this feedback is about',
    }),
    defineField({
      name: 'message',
      title: 'Feedback Message',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Optional rating from 1 to 5',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
