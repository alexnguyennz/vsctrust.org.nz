import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";

import { imagesSchema, sponsorsSchema } from "@/lib/schemas";

const pages = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/pages",
  }),
});

const posts = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/posts",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      author: reference("team"),
      image: image(),
      published: z.boolean(),
    }),
});

const team = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/team",
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      position: z.string(),
      image: image(),
      excerpt: z.string(),
      order: z.number(),
    }),
});

const trust = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/trust",
  }),
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
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/dosomegoodImages",
  }),
  schema: imagesSchema,
});

const dosomegoodSponsors = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/dosomegoodSponsors",
  }),
  schema: sponsorsSchema,
});

const dosomegoodSupporters = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/dosomegoodSupporters",
  }),
  schema: sponsorsSchema,
});

const dosomegoodSchools = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/dosomegoodSchools",
  }),
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

const take10AucklandImages = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/take10AucklandImages",
  }),
  schema: imagesSchema,
});

const take10AucklandSponsors = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/take10AucklandSponsors",
  }),
  schema: sponsorsSchema,
});

const take10Images = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/take10Images",
  }),
  schema: imagesSchema,
});

const take10Sponsors = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/take10Sponsors",
  }),
  schema: sponsorsSchema,
});

const take10arvosImages = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/take10arvosImages",
  }),
  schema: imagesSchema,
});

const take10arvosSponsors = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/take10arvosSponsors",
  }),
  schema: sponsorsSchema,
});

const genlinkImages = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/genlinkImages",
  }),
  schema: imagesSchema,
});

export const collections = {
  pages,
  posts,
  team,
  trust,
  dosomegoodImages,
  dosomegoodSponsors,
  dosomegoodSupporters,
  dosomegoodSchools,
  take10Images,
  take10Sponsors,
  take10AucklandImages,
  take10AucklandSponsors,
  take10arvosImages,
  take10arvosSponsors,
  genlinkImages,
};
