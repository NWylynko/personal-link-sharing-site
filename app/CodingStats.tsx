import { fetchWakatimeStats } from "../lib/fetchWakatimeStats"


export const CodingStats = async () => {
  const stats = await fetchWakatimeStats()

  // const mainLanguage = stats.languages.sort((lanA, lanB) => lanB.total_seconds - lanB.total_seconds)[0].name

  const { hours, minutes } = stats.grand_total

  if (hours === 0 && minutes === 0) {
    return null; // sad haven't done any coding today
  }

  if (hours === 0) {
    // haven't done much coding
    return (
      <span style={{ color: "white" }}>
        I&apos;ve only coded for {minutes} Minute{sOrNoS(minutes)} today.
      </span>
    )
  }

  return (
    <span style={{ color: "white" }}>
      I&apos;ve been coding for {hours} Hour{sOrNoS(hours)} and {minutes} Minute{sOrNoS(minutes)} today.
    </span>
  )
}

const sOrNoS = (n: number) => {
  if (n === 1) {
    return ''
  } else {
    return 's'
  }
}