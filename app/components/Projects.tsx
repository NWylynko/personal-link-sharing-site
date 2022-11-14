
import { Repos } from "~/features/Github"
import styles from "./Projects.module.css"

export const Projects = () => {
  return (
    <>
      <h1 className={styles.title}>Recent Projects</h1>
      <Repos />
    </>
  )
}