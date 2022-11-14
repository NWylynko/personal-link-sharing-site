import { fetchWakatimeStats } from "../../lib/fetchWakatimeStats"
import { fetchWakatimeStatus } from "../../lib/fetchWakatimeStatus"
import styles from "./Details.module.css"

export const Details = async () => {

  const status = await fetchWakatimeStatus()
  const stats = await fetchWakatimeStats()

  return (
    <ul className={styles.list}>
      <ListItem label="Weapon of choice" text="Typescript" />
      <ListItem label="Time coding today" text={stats} />
      <ListItem label="Status" text={status} />
    </ul>
  )
}

type ListItemProps = {
  label: string;
  text: string;
}

const ListItem = ({ label, text }: ListItemProps) => {
  return <li className={styles.item}><strong>{label}: </strong>{text}</li>
}