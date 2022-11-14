import { z } from "zod";
import { formSpreeSchema } from "~/features/FormSpree/schema";
import { githubSchema } from "~/features/Github/schema";
import { vercelAnalyticsSchema } from "~/features/VercelAnalytics/schema";
import { wakatimeSchema } from "~/features/Wakatime/schema";

const siteSchema = z.object({
  language: z.string()
})

// StaticImageData from next/image
const StaticImageData = z.object({
  src: z.string(),
  height: z.number(),
  width: z.number(),
  blurDataURL: z.string().optional(),
  blurWidth: z.number().optional(),
  blurHeight: z.number().optional(),
})

const projectSchema = z.object({
  name: z.string(),
  picture: StaticImageData,
  language: z.string()
})

const linksSchema = z.array(
  z.object({
    label: z.string(),
    url: z.string().url(),
    icon: z.function()
  })
)

const featuresSchema = z.object({
  github: githubSchema,
  formspree: formSpreeSchema,
  wakatime: wakatimeSchema,
  vercelAnalytics: vercelAnalyticsSchema
})

export const configSchema = z.object({
  site: siteSchema,
  profile: projectSchema,
  links: linksSchema,
  features: featuresSchema
})

export type Config = z.infer<typeof configSchema>

export const Config = configSchema.parse