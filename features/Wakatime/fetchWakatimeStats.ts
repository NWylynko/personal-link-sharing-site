import { z } from 'zod';
import { config } from '~/config';

export const fetchWakatimeStats = async () => {
  const response = await fetch('https://wakatime.com/api/v1/users/current/status_bar/today', {
    headers: {
      Authorization: `Basic ${config.features.wakatime.token()}`
    },
    next: {
      revalidate: 60 * 30 // every 30 minutes
    }
  })

  const data = await response.json()

  const details = await schema.parseAsync(data);

  const { hours, minutes } = details.data.grand_total

  if (hours === 0 && minutes === 0) {
    return `None :(`; // sad haven't done any coding today
  }

  if (hours === 0) {
    // haven't done much coding
    return (
      `${minutes} Minute${sOrNoS(minutes)}`
    )
  }

  return (
    `${hours} Hour${sOrNoS(hours)} and ${minutes} Minute${sOrNoS(minutes)}`
  )
}

// this doesn't include everything the api returns but I don't need most of it
export const schema = z.object({
  cached_at: z.string(),
  data: z.object({
    grand_total: z.object({
      hours: z.number(),
      minutes: z.number(),
    }),
  })
})

const sOrNoS = (n: number) => {
  if (n === 1) {
    return ''
  } else {
    return 's'
  }
}