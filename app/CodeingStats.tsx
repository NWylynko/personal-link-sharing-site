import { fetchWakatimeStats } from "../lib/fetchWakatimeStats"


export const CodingStats = async () => {
  const stats = await fetchWakatimeStats()

  // const mainLanguage = stats.languages.sort((lanA, lanB) => lanB.total_seconds - lanB.total_seconds)[0].name

  return (
    <span style={{ color: "white" }}>
      Today I coded for {stats.grand_total.hours} Hours and {stats.grand_total.minutes} Minutes.
    </span>
  )
}