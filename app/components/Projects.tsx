
import { FeatureToggle } from "~/components/Feature"
import { Repos } from "~/features/Github"

export const Projects = FeatureToggle("github", () => {
  return (
    <>
      <h2 className="text-white text-3xl">Recent OSS Projects</h2>

      {/* @ts-expect-error rsc */}
      <Repos />
    </>
  )
})
