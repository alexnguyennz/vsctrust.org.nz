import { type SchemaContext, z } from "astro:content";

export const imagesSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    image: image(),
  });
export const sponsorsSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    image: image(),
    website: z.string().nullable(),
  });
