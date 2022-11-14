import { z } from "zod";
import { baseFeaturesSchema, envVariable } from "~/lib/baseFeaturesSchema";

export const githubSchema = baseFeaturesSchema.merge(
  z.object({
    token: envVariable,
    username: z.string()
  })
)