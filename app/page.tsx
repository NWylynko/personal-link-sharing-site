import Image from "next/image";
import ProfilePic from "../public/profile.png"
import { LinkItem } from "./LinkItem";
import { Links } from "./Links";
import styles from "./styles.module.css"

import { TbBrandGithub } from "@react-icons/all-files/tb/TbBrandGithub"
import { TbBrandTwitter } from "@react-icons/all-files/tb/TbBrandTwitter"
import { TbBrandLinkedin } from "@react-icons/all-files/tb/TbBrandLinkedin"
import { TbCpu } from "@react-icons/all-files/tb/TbCpu"


export default function HomePage() {
  return (
    <div className={styles.container}>
      <Image 
        className={styles.image} 
        src={ProfilePic} 
        alt="Profile Picture" 
        height={96} 
        width={96} 
        placeholder="blur" />
      <h1 className={styles.title}>Nick Wylynko</h1>
      <h2 className={styles.blurb}>I build projects with Typescript</h2>
      <Links>
        <LinkItem label="Github" url="https://github.com/NWylynko" icon={TbBrandGithub} />
        <LinkItem label="Twitter" url="https://twitter.com/wylynko" icon={TbBrandTwitter} />
        <LinkItem label="Linkedin" url="https://www.linkedin.com/in/nick-wylynko/" icon={TbBrandLinkedin} />
        <LinkItem label="NPM" url="https://www.npmjs.com/~nwylynko" icon={TbCpu} />
      </Links>
    </div>
  )
}