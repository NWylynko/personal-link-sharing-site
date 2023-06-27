import Image from "next/image";
import { config } from "~/config";
import { twMerge } from "tailwind-merge"

export const ProfilePicture = () => {
  return (
    <div className="flex flex-row gap-0 sm:gap-2 md:gap-4 mb-4">
      {config.profile.pictures.map((props) => (
        <Image
          key={props.key}
          className={
            twMerge(
              "rounded-[32px]",
              props.className
            )
          }
          src={props.image}
          alt={props.alt}
          height={96 * 2.0}
          width={96 * 2.0}
        />
      ))}
    </div>
  );
};
