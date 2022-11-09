
import styles from "./Links.module.css"

interface LinksProps {
  children: JSX.Element | JSX.Element[]
}

export const Links = ({ children }: LinksProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}