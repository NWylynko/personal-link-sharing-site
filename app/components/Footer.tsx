import { ExternalLink } from "../../components/ExternalLink";
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <>
    <span className={styles.sub}><ExternalLink href="https://github.com/NWylynko/personal-link-sharing-site" className={styles.link}>Fork the repo</ExternalLink> to make you own version.</span>
      <span className={styles.sub}>Built with <ExternalLink href="https://nextjs.org/" className={styles.link}>Next.js</ExternalLink>, deployed to <ExternalLink href="https://vercel.com/" className={styles.link}>Vercel</ExternalLink>.</span>
    </>
  )
}