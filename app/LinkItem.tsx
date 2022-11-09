import styles from "./LinkItem.module.css"
import type { IconType } from "@react-icons/all-files"
import { ExternalLink } from "../components/ExternalLink";

interface LinkItemProps {
  label: string;
  url: string;
  icon: IconType;
}

export const LinkItem = ({ label, url, icon: Icon }: LinkItemProps) => {
  return (
    <ExternalLink href={url} className={styles.link}>
      <button className={styles.button}>
        <Icon size={24} />
        <span>{label}</span>
        <div />
      </button>
    </ExternalLink>
  )
}