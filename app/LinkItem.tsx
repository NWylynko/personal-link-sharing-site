import Link from "next/link"
import styles from "./LinkItem.module.css"
import type { IconType } from "@react-icons/all-files"

interface LinkItemProps {
  label: string;
  url: string;
  icon: IconType;
}

export const LinkItem = ({ label, url, icon: Icon }: LinkItemProps) => {
  return (
    <Link href={url} className={styles.link}>
      <button className={styles.button}>
        <Icon size={24} />
        <span>{label}</span>
        <div />
      </button>
    </Link>
  )
}