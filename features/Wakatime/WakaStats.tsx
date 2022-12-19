import { FeatureToggle } from "~/components/Feature";
import { fetchWakatimeStats, fetchWakatimeStatus } from "~/features/Wakatime";
import { ListItem } from "~/app/components/Details";

export const WakaStats = FeatureToggle("wakatime", async () => {

  // this is broken cuz timezones im guess, can't be bothering fixing it rn
  // const status = await fetchWakatimeStatus();
  const stats = await fetchWakatimeStats();

  return (
    <>
      <ListItem label="Time coding today" text={stats} />
      {/* <ListItem label="Status" text={status} /> */}
    </>
  );
});
