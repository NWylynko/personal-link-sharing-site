import { FeatureToggle } from "~/components/Feature"
import { VercelAnalytics as Analytics } from "./Analytics"

export const VercelAnalytics = FeatureToggle("vercelAnalytics", Analytics)