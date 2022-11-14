import { FeatureToggle } from "~/components/Feature";
import { fetchWakatimeStats, fetchWakatimeStatus } from "~/features/Wakatime";
import { ListItem } from "~/app/components/Details";

export const WakaStats = FeatureToggle("wakatime", async () => {

  const status = await fetchWakatimeStatus();
  const stats = await fetchWakatimeStats();

  return (
    <>
      <ListItem label="Time coding today" text={stats} />
      <ListItem label="Status" text={status} />
    </>
  );
});
