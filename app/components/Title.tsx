
import { config } from "~/config"
import styles from "./Title.module.css"

export const Title = () => {
  return <h1 className={styles.title}>{config.profile.name}</h1>
}