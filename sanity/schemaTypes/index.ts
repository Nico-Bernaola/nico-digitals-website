import { type SchemaTypeDefinition } from 'sanity'
import { postSchema, tagSchema } from './post'
import { resourceSchema } from './resource'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postSchema, tagSchema, resourceSchema],
}