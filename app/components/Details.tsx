import { Suspense } from "react"
import { WakaStats } from "~/features/Wakatime/WakaStats"
import { DetailsError } from "./DetailsError"

export const Details = () => {
  return (
    <ul className="text-white py-0 px-2 my-0 mx-2 flex flex-col gap-1" style={{ listStyleType: "'> '" }}>
      {/* <ListItem label="Weapon of choice" text={config.profile.language} /> */}

      <DetailsError>
        <Suspense>
          <WakaStats />
        </Suspense>
      </DetailsError>
    </ul>
  )
}

type ListItemProps = {
  label?: string;
  text: string;
}

export const ListItem = ({ label, text }: ListItemProps) => {
  return <li>{label ? <strong>{label} </strong> : undefined}{text}</li>
}
