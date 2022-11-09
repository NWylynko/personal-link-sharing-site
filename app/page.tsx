import Image from "next/image";
import ProfilePic from "../assets/profile.png"


export default function HomePage() {
  return (
    <div>
      <Image src={ProfilePic} alt="Profile Picture" height={96} width={96} />
      <h1>Nick Wylynko</h1>
      <h2>I build projects with Typescript</h2>
    </div>
  )
}