import { z } from "zod";
import { baseFeaturesSchema, envVariable } from "~/lib/baseFeaturesSchema";

export const vercelAnalyticsSchema = baseFeaturesSchema.merge(
  z.object({
    //
  })
)