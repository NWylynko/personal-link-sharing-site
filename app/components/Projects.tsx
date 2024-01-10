
import { Suspense } from "react"
import { FeatureToggle } from "~/components/Feature"
import { Repos } from "~/features/Github"
import { ReposError } from "~/features/Github/ReposError"

export const Projects = FeatureToggle("github", () => {
  return (
    <>
      <h2 className="text-white text-3xl">Recent OSS Projects</h2>

      <ReposError>
        <Suspense>
          <Repos />
        </Suspense>
      </ReposError>
    </>
  )
})
