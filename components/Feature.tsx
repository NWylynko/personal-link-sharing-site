import { config } from "~/config"
import { isFeatureEnabled } from "~/lib/isFeatureEnabled"

type Component<Props> = (((props: Props) => JSX.Element) | ((props: Props) => Promise<JSX.Element>))

// depending on the setting in the config file, this either shows / hides the component
export const FeatureToggle = <Props, CustomComponent extends Component<Props> = Component<Props>> (feature: keyof typeof config["features"], component: CustomComponent) => {
  return ToggleComponent<Props, CustomComponent>(isFeatureEnabled(feature), component)
}

const EmptyComponent = () => <></>

// this either show / hides the component
export const ToggleComponent = <Props, CustomComponent extends Component<Props> = Component<Props>> (toggle: boolean, component: CustomComponent) => {
  if (toggle) {
    return component
  } else {
    return EmptyComponent
  }
}
