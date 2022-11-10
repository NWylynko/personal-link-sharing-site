import Image from "next/image";
import ProfilePic from "../public/profile.png"
import { LinkItem } from "./LinkItem";
import { List } from "./List";
import styles from "./styles.module.css"

import { TbBrandGithub } from "@react-icons/all-files/tb/TbBrandGithub"
import { TbBrandTwitter } from "@react-icons/all-files/tb/TbBrandTwitter"
import { TbBrandLinkedin } from "@react-icons/all-files/tb/TbBrandLinkedin"
import { TbCpu } from "@react-icons/all-files/tb/TbCpu"
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail"
import { ExternalLink } from "../components/ExternalLink";
import { Repos } from "./Repos";
import { ContactForm } from "./ContactForm";
import { CodingStats } from "./CodeingStats";


export default function HomePage() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={ProfilePic}
        alt="Profile Picture"
        height={96 * 1.5}
        width={96 * 1.5}
        placeholder="blur" />
      <h1 className={styles.title}>Nick Wylynko</h1>
      <h2 className={styles.blurb}>I build projects with Typescript</h2>
      <CodingStats />
      <List style={{ marginTop: 32 }}>
        <LinkItem label="Github" url="https://github.com/NWylynko" icon={TbBrandGithub} />
        <LinkItem label="Twitter" url="https://twitter.com/wylynko" icon={TbBrandTwitter} />
        <LinkItem label="Linkedin" url="https://www.linkedin.com/in/nick-wylynko/" icon={TbBrandLinkedin} />
        <LinkItem label="NPM" url="https://www.npmjs.com/~nwylynko" icon={TbCpu} />
        <details className={styles.contactDetails}>
          <summary className={styles.contactSummary}><HiOutlineMail size={24}/>Get in Contact<div /></summary>
          <ContactForm />
        </details>
      </List>
      {/* <h1 style={{ color: "white" }}>Get in touch</h1> */}

      <Repos />
      <span className={styles.sub}><ExternalLink href="https://github.com/NWylynko/personal-link-sharing-site" className={styles.link}>Fork the repo</ExternalLink> to make you own version.</span>
      <span className={styles.sub}>Built with <ExternalLink href="https://nextjs.org/" className={styles.link}>Next.js</ExternalLink>, deployed to <ExternalLink href="https://vercel.com/" className={styles.link}>Vercel</ExternalLink>.</span>
    </div>
  )
}

// unnecessary 