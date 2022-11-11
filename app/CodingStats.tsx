import { fetchWakatimeStats } from "../lib/fetchWakatimeStats"


export const CodingStats = async () => {
  const stats = await fetchWakatimeStats()

  // const mainLanguage = stats.languages.sort((lanA, lanB) => lanB.total_seconds - lanB.total_seconds)[0].name

  if (stats.grand_total.hours === 0 && stats.grand_total.minutes === 0) {
    return null; // sad haven't done any coding today
  }

  if (stats.grand_total.hours === 0) {
    // haven't done much coding
    return (
      <span style={{ color: "white" }}>
        I&apos;ve only coded for {stats.grand_total.minutes} Minutes today.
      </span>
    )
  }

  return (
    <span style={{ color: "white" }}>
      I&apos;ve been coding for {stats.grand_total.hours} Hours and {stats.grand_total.minutes} Minutes today.
    </span>
  )
}