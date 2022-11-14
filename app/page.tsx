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
import { RiDiscordLine } from "@react-icons/all-files/ri/RiDiscordLine"

import { ExternalLink } from "../components/ExternalLink";
import { Repos } from "./Repos";
import { ContactForm } from "./ContactForm";
import { Details } from "./components/Details";

export default async function HomePage() {
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
      <Details />
      <List style={{ marginTop: 16 }}>
        <LinkItem label="Github" url="https://github.com/NWylynko" icon={TbBrandGithub} />
        <LinkItem label="Twitter" url="https://twitter.com/wylynko" icon={TbBrandTwitter} />
        <LinkItem label="Linkedin" url="https://www.linkedin.com/in/nick-wylynko/" icon={TbBrandLinkedin} />
        <LinkItem label="NPM" url="https://www.npmjs.com/~nwylynko" icon={TbCpu} />
        <details className={styles.contactDetails}>
          <summary className={styles.contactSummary}><HiOutlineMail size={24}/>Get in Contact<div /></summary>
          <ContactForm />
        </details>
        <LinkItem label="Discord" url="https://discordapp.com/users/272984261433491456" icon={RiDiscordLine} />
      </List>
      <Repos />
      <span className={styles.sub}><ExternalLink href="https://github.com/NWylynko/personal-link-sharing-site" className={styles.link}>Fork the repo</ExternalLink> to make you own version.</span>
      <span className={styles.sub}>Built with <ExternalLink href="https://nextjs.org/" className={styles.link}>Next.js</ExternalLink>, deployed to <ExternalLink href="https://vercel.com/" className={styles.link}>Vercel</ExternalLink>.</span>
    </div>
  )
}
