
import Image from "next/image";
import { config } from "~/config";

export const ProfilePicture = () => {
  return (
    <Image
      className="rounded-[32px]"
      src={config.profile.picture}
      alt="Profile Picture"
      height={96 * 2.0}
      width={96 * 2.0}
      placeholder="blur" />
  )
}