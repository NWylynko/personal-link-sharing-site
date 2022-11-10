import { z } from 'zod';

const envSchema = z.object({
  WAKATIME_TOKEN: z.string()
})

const env = envSchema.parse(process.env)

export const fetchWakatimeStats = async () => {
  const response = await fetch('https://wakatime.com/api/v1/users/current/status_bar/today', {
    headers: {
      Authorization: `Basic ${env.WAKATIME_TOKEN}`
    },
    next: {
      revalidate: 60 * 60
    }
  })

  const data = await response.json()

  const details = await schema.parseAsync(data);

  return details.data
}

// this doesn't include everything the api returns but I don't need most of it
export const schema = z.object({
  cached_at: z.string(),
  data: z.object({
    grand_total: z.object({
      hours: z.number(),
      minutes: z.number(),
    }),
    languages: z.array(
      z.object({
        name: z.string(),
        total_seconds: z.number()
      })
    ),
  })
})
