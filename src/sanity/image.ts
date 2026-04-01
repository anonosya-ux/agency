import imageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from './env'

// https://www.sanity.io/docs/image-url
const builder = imageUrlBuilder({ projectId, dataset })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlForImage = (source: any) => {
  return builder.image(source)
}
