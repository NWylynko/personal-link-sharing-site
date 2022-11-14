import { config } from "~/config"
import { isFeatureEnabled } from "~/lib/isFeatureEnabled"

// depending on the setting in the config file, this either shows / hides the component
export const FeatureToggle = <Props, > (feature: keyof typeof config["features"], component: (props: Props) => JSX.Element) => {
  return ToggleComponent(isFeatureEnabled(feature), component)
}

const EmptyComponent = () => <></>

// this either show / hides the component
export const ToggleComponent = <Props, > (toggle: boolean, component: (props: Props) => JSX.Element) => {
  if (toggle) {
    return component
  } else {
    return EmptyComponent
  }
}
