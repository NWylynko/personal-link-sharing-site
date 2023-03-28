import styles from "./LinkItem.module.css"
import type { IconType } from "@react-icons/all-files"
import { ExternalLink } from "~/components/ExternalLink";

export type LinkItemProps = {
  label: string;
  url: string;
  icon: IconType;
}

// setting tab index to negative 1 so its not tabbable too
// as the user can already tab to the <a> element

export const LinkItem = ({ label, url, icon: Icon }: LinkItemProps) => {
  return (
    <ExternalLink href={url} className="rounded-[32px] no-underline">
      <button className={styles.button} tabIndex={-1}>
        <Icon size={24} />
        <span className="no-underline">{label}</span>
        <div />
      </button>
    </ExternalLink>
  )
}