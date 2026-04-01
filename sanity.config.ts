import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'
import { dataset, projectId } from './src/sanity/env'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Fatukhin & Ko Admin',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool(),
  ],
})
