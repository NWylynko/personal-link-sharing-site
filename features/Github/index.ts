import { FeatureToggle } from "~/components/Feature"
import { Repos as _Repos } from "./Repos"

export const Repos = FeatureToggle("github", _Repos)