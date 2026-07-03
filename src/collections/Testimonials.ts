import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'featured'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'name',
        type: 'text',
        required: true,
    },
    {
        name: 'company',
        type: 'text',
    },
    {
        name: 'position',
        type: 'text',
    },
    {
        name: 'testimonial',
        type: 'richText',
    },
    {
        name: 'photo',
        type: 'upload',
        relationTo: 'media',
    },
    {
        name: 'rating',
        type: 'number',
        min: 1,
        max: 5,
        defaultValue: 5,
    },
    {
        name: 'featured',
        type: 'checkbox',
        defaultValue: false,
    },
    {
        name: 'order',
        type: 'number',
        defaultValue: 0,
    },
  ],
}