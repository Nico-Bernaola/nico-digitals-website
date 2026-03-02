import { type SchemaTypeDefinition } from 'sanity'
import { postSchema, tagSchema } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postSchema, tagSchema],
}