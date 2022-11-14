import type { IconType } from "@react-icons/all-files";
import styles from "./DropDown.module.css"

type DropDownProps = {
  label: string;
  icon: IconType;
  children: JSX.Element
}

export const DropDown = ({ label, icon: Icon, children }: DropDownProps) => {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}><Icon size={24}/>{label}<div /></summary>
      {children}
    </details>
  )
}