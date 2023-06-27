import Image from "next/image";
import { config } from "~/config";
import { twMerge } from "tailwind-merge"

const styles = "border-2 border-white border-solid"
export const ProfilePicture = () => {
  return (
    <div className="flex flex-row justify-center max-w-lg w-[90vw] gap-2 sm:gap-4 md:gap-8 mb-4">
      {config.profile.pictures.map((props) => (
        <Image
          key={props.key}
          className={
            twMerge(
              "rounded-[32px] w-auto max-w-[45vw] h-auto max-h-[192px] object-cover",
              props.className
            )
          }
          src={props.image}
          alt={props.alt}
          height={64 * 3}
          width={64 * 3}
        />
      ))}
    </div>
  );
};
