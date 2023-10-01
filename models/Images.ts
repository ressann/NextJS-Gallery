import { z }  from 'zod'

const BasicImagesSchema = z.object({
    page: z.number(),
    per_page: z.number(),
    prev_page: z.string().optional(),
    next_page: z.string().optional(),
    total_results: z.number(),
})

const PhotoSchema = z.object({
    id: z.number(),
    width: z.number(),
    height: z.number(),
    url: z.string(),
    src: z.object({
        large: z.string(),
    }),
    alt: z.string(),
    blurredDataUrl: z.string().optional(),
})

// combine BasicIamgesSchema with PhotoSchema
export const ImagesSchemaWithPhotos = BasicImagesSchema.extend({
    photos: z.array(PhotoSchema),
})

// export type of PhotoSchema 
export type Photo = z.infer<typeof PhotoSchema>

// export type of ImagesSchemaWithPhoto
export type ImagesResults = z.infer<typeof ImagesSchemaWithPhotos>