import { z, defineCollection, reference } from "astro:content";
import { imagesSchema, sponsorsSchema } from "@/lib/schemas";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      author: reference("trust"),
      image: image(),
      published: z.boolean(),
    }),
});

const trust = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      position: z.string(),
      image: image(),
      excerpt: z.string(),
      order: z.number(),
    }),
});

const dosomegoodImages = defineCollection({
  type: "content",
  schema: imagesSchema,
});
const dosomegoodSponsors = defineCollection({
  type: "content",
  schema: sponsorsSchema,
});
const dosomegoodSupporters = defineCollection({
  type: "content",
  schema: sponsorsSchema,
});
const dosomegoodSchools = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      location: z.string(),
      tamariki: z.number(),
      partnerDate: z.string(),
      website: z.string(),
      sponsorImage: z.optional(image()).nullable(),
      sponsorUrl: z.string().nullable().optional(),
      order: z.number(),
    }),
});

const take10Images = defineCollection({
  type: "content",
  schema: imagesSchema,
});
const take10Sponsors = defineCollection({
  type: "content",
  schema: sponsorsSchema,
});

const take10arvosImages = defineCollection({
  type: "content",
  schema: imagesSchema,
});
const take10arvosSponsors = defineCollection({
  type: "content",
  schema: sponsorsSchema,
});

const genlinkImages = defineCollection({
  type: "content",
  schema: imagesSchema,
});

export const collections = {
  posts,
  dosomegoodImages,
  dosomegoodSponsors,
  dosomegoodSupporters,
  dosomegoodSchools,
  take10Images,
  take10Sponsors,
  take10arvosImages,
  take10arvosSponsors,
  genlinkImages,
  trust,
};
