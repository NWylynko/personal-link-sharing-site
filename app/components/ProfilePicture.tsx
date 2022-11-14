
import Image from "next/image";
import styles from "./ProfilePicture.module.css"
import { config } from "~/config";

export const ProfilePicture = () => {
  return (
    <Image
      className={styles.image}
      src={config.profile.picture}
      alt="Profile Picture"
      height={96 * 1.5}
      width={96 * 1.5}
      placeholder="blur" />
  )
}