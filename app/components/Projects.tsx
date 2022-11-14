
import { FeatureToggle } from "~/components/Feature"
import { Repos } from "~/features/Github"
import styles from "./Projects.module.css"

export const Projects = FeatureToggle("github", () => {
  return (
    <>
      <h1 className={styles.title}>Recent Projects</h1>
      <Repos />
    </>
  )
})
