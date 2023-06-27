import Image from "next/image";
import { config } from "~/config";
import { twMerge } from "tailwind-merge"

export const ProfilePicture = () => {
  return (
    <div className="flex flex-row justify-center max-w-lg w-[100vw] gap-0 sm:gap-2 md:gap-4 mb-4">
      {config.profile.pictures.map((props) => (
        <Image
          key={props.key}
          className={
            twMerge(
              "rounded-[32px] w-auto h-auto max-h-[192px] object-cover",
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
