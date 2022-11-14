import { config } from "~/config";

export const isFeatureEnabled = (feature: keyof typeof config["features"]) => {
  return config.features[feature].enabled
}