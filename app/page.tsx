import styles from "./styles.module.css";

import { ProfilePicture } from "./components/ProfilePicture";
import { Title } from "./components/Title";
import { Details } from "./components/Details";
import { Links } from "./components/Links";
import { Repos } from "./components/Repos";
import { Footer } from "./components/Footer";

export default async function HomePage() {
  return (
    <div className={styles.container}>
      <ProfilePicture />
      <Title />
      <Details />
      <Links />
      <Repos />
      <Footer />
    </div>
  )
}
