
import { config } from "~/config"

export const Title = () => {
  return <h1 className="text-white font-bold text-center text-4xl">{config.profile.name}</h1>
}