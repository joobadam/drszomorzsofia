import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Dr. Szomor Zsófia - Tudástár',

  projectId: '0bk6d52j',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  // Customize the studio
  studio: {
    components: {
      // You can customize the studio components here
    }
  }
})
