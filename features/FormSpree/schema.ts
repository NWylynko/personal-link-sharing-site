import { z } from "zod";
import { baseFeaturesSchema, envVariable } from "~/lib/baseFeaturesSchema";

export const formSpreeSchema = baseFeaturesSchema.merge(
  z.object({
    token: envVariable
  })
)