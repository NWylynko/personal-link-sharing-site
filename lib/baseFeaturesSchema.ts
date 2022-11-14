import { z } from "zod";


export const baseFeaturesSchema = z.object({
  enabled: z.literal(true)
});

export const envVariable = z.function().returns(z.string());
