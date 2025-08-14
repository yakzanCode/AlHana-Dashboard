// schemas/feedback.js
import { defineType, defineField } from 'sanity'

export const feedBack = defineType({
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (rule) => rule.required(),
      description: 'The user who submitted the feedback',
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
      validation: (rule) => rule.required(),
      description: 'The feedback text from the user',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating from 1 to 5',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      userName: 'user.name',
      dishTitle: 'dish.title',
      rating: 'rating',
    },
    prepare({ userName, dishTitle, rating }) {
      return {
        title: `${userName || 'Unknown User'} → ${dishTitle || 'Unknown Dish'}`,
        subtitle: rating ? `Rating: ${rating}/5` : 'No rating provided',
      }
    },
  },
})
