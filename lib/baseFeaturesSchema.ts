import { z } from "zod";


export const baseFeaturesSchema = z.object({
  enabled: z.boolean()
});

export const envVariable = z.function().returns(z.string());
