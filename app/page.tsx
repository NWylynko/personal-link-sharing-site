import Image from "next/image";
import ProfilePic from "../assets/profile.png"
import styles from "./styles.module.css"


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
    </div>
  )
}