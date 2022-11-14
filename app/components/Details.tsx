import { config } from "~/config"
import styles from "./Details.module.css"
import { WakaStats } from "~/features/Wakatime/WakaStats"

export const Details = () => {
  return (
    <ul className={styles.list}>
      <ListItem label="Weapon of choice" text={config.profile.language} />
      <WakaStats />
    </ul>
  )
}

type ListItemProps = {
  label: string;
  text: string;
}

export const ListItem = ({ label, text }: ListItemProps) => {
  return <li className={styles.item}><strong>{label}: </strong>{text}</li>
}
