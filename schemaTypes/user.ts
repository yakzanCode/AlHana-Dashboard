import { defineType, defineField } from 'sanity'

export const user = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'feedback',
      title: 'Feedback',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dish',
      title: 'Dish',
      type: 'reference',
      to: [{ type: 'dish' }],
      description: 'The dish this feedback is about',
    }),
  ],
})
