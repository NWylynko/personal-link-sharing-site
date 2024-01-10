
// using the wakatime heartbeats api endpoint to determine if the user is currently online or not

import { z } from 'zod';
import { config } from '~/config';

export const fetchWakatimeStatus = async () => {

  if (!config.features.wakatime.enabled) {
    throw new Error(`feature wakatime is not enabled`)
  }

  const rightNow = new Date()
  const date = `${rightNow.getFullYear()}-${rightNow.getMonth() + 1}-${rightNow.getDate()}` // wow the date api is trash

  const response = await fetch(`https://wakatime.com/api/v1/users/current/heartbeats?date=${date}`, {
    headers: {
      Authorization: `Basic ${config.features.wakatime.token()}`
    },
    next: {
      revalidate: 60 * 30 // every 30 minutes
    }
  })

  const data = await response.json()

  // console.log("wakatime online data", data)

  const { data: details } = await schema.parseAsync(data);

  const { created_at: lastHeartbeat } = details[details.length - 1]

  const offset = new Date(lastHeartbeat).getTime() - rightNow.getTime()

  const toleranceOnline = 60 * 1000 // one minute
  const toleranceAway = 60 * 1000 * 10 // ten minutes

  if (offset < toleranceOnline && offset > -toleranceOnline) {
    return "Online"
  } else if (offset < toleranceAway && offset > -toleranceAway) {
    return "Away"
  } else {
    return "Offline"
  }

}

// this doesn't include everything the api returns but I don't need most of it
export const schema = z.object({
  data: z.array(
    z.object({
      created_at: z.string(),
    })
  )
})
