import type { CollectionConfig } from 'payload'

import { defaultLexical } from '@/fields/defaultLexical'

export const Services: CollectionConfig = {
  slug: 'services',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'featured', 'order'],
  },

  defaultSort: 'order',

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },

    {
      name: 'excerpt',
      type: 'textarea',
    },

    {
    name: 'heroImage',
    type: 'upload',
    relationTo: 'media',
    },

    {
      name: 'content',
      type: 'richText',
      editor: defaultLexical,
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