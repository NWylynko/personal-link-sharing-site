import { ProfilePicture } from "./components/ProfilePicture";
import { Title } from "./components/Title";
import { Details } from "./components/Details";
import { Links } from "./components/Links";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center content-center gap-4">
      <ProfilePicture />
      <Title />
      <Details />
      <Links />
      <Projects />
      <Footer />
    </div>
  )
}
