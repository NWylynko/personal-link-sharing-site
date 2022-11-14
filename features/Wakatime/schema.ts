import { z } from "zod";
import { baseFeaturesSchema, envVariable } from "~/lib/baseFeaturesSchema";

export const wakatimeSchema = baseFeaturesSchema.merge(
  z.object({
    token: envVariable
  })
)