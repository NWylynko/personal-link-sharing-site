
import styles from "./List.module.css"

interface LinksProps {
  children: JSX.Element | JSX.Element[]
}

export const List = ({ children }: LinksProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}