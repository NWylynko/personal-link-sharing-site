
import Image from "next/image";
import styles from "./ProfilePicture.module.css"
import ProfilePic from "../../public/profile.png"

export const ProfilePicture = () => {
  return (
    <Image
      className={styles.image}
      src={ProfilePic}
      alt="Profile Picture"
      height={96 * 1.5}
      width={96 * 1.5}
      placeholder="blur" />
  )
}