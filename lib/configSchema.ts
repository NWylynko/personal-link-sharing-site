import { Metadata } from "next";
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
  pictures: z.array(z.object({
    key: z.string(),
    image: StaticImageData,
    alt: z.string(),
    className: z.string().optional()
  })),
  language: z.string()
})

const reactIcon = z
  .function()
  .args(z.object({
    size: z.union([z.string(), z.number()]).optional(),
    color: z.string().optional(),
    title: z.string().optional()
  }))

const linksSchema = z.array(
  z.object({
    label: z.string(),
    url: z.string().url(),
    icon: reactIcon
  })
)

const disabledFeatureSchema = z.object({
  enabled: z.literal(false)
})

const featuresSchema = z.object({
  github: z.union([disabledFeatureSchema, githubSchema]),
  formspree: z.union([disabledFeatureSchema, formSpreeSchema]),
  wakatime: z.union([disabledFeatureSchema, wakatimeSchema]),
  vercelAnalytics: z.union([disabledFeatureSchema, vercelAnalyticsSchema])
})

export const configSchema = z.object({
  site: siteSchema,
  profile: projectSchema,
  links: linksSchema,
  features: featuresSchema,
  seo: z.any().default({}) as z.ZodType<Metadata>
})

export type Config = z.infer<typeof configSchema>
export type ConfigSite = Config["site"];
export type ConfigProfile = Config["profile"];
export type ConfigLinks = Config["links"];
export type ConfigFeatures = Config["features"];
export type ConfigSeo = Config["seo"];

export const Config = configSchema.parse as (config: Config) => Config