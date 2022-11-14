
import { DetailedHTMLProps, HTMLAttributes } from "react"
import styles from "./List.module.css"

type LinksProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const List = ({ children, ...props }: LinksProps) => {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  )
}