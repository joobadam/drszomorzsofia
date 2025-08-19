import { defineField, defineType } from 'sanity'

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
      description: 'A short biography of the author',
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      description: 'e.g., Ügyvéd, Jogász, Dr.',
    }),
    defineField({
      name: 'specializations',
      title: 'Specializations',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Areas of legal expertise',
      options: {
        list: [
          'Büntetőjog',
          'Családjog',
          'Ingatlanjog',
          'Cégjog',
          'Polgári jog',
          'Európai emberi jogok',
          'Közlekedési jog',
        ],
      },
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'email',
          type: 'string',
          title: 'Email',
          validation: (Rule) => Rule.email(),
        },
        {
          name: 'phone',
          type: 'string',
          title: 'Phone',
        },
        {
          name: 'website',
          type: 'url',
          title: 'Website',
        },
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          type: 'url',
          title: 'LinkedIn',
        },
        {
          name: 'facebook',
          type: 'url',
          title: 'Facebook',
        },
        {
          name: 'instagram',
          type: 'url',
          title: 'Instagram',
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Name, A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image',
    },
  },
})
