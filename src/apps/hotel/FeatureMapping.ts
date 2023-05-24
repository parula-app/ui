import Wifi from "svelte-material-icons/Wifi.svelte";
import CoffeeOutline from "svelte-material-icons/CoffeeOutline.svelte";
import AirConditioner from "svelte-material-icons/AirConditioner.svelte";
import SilverwareForkKnife from "svelte-material-icons/SilverwareForkKnife.svelte";

export const featureMapping = {
  "free wifi": {
    id: 1,
    name: "Free Wifi",
    icon: Wifi,
  },
  breakfast: {
    id: 2,
    name: "Breakfast",
    icon: CoffeeOutline,
  },
  "air conditioner": {
    id: 3,
    name: "Air Conditioner",
    icon: AirConditioner,
  },
  restaurant: {
    id: 4,
    name: "Restaurant",
    icon: SilverwareForkKnife,
  },
};