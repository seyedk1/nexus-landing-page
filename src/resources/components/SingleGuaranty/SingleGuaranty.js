import { ref } from "vue";
import {
  ClockSvg,
  LockSvg,
  NoteSvg,
  SpeedSvg,
} from "@/resources/components/Icons/Guaranties";

export default {
  components: {
    ClockSvg,
    LockSvg,
    NoteSvg,
    SpeedSvg,
  },
  setup() {
    const guaranties = ref([
      {
        icon: "ClockSvg",
        title: "Speed ​​in executing orders",
        text: "Rapid order execution is critical to secure desired prices and minimize slippage, essential for optimizing trading outcomes.",
      },
      {
        icon: "LockSvg",
        title: "Security & Safety",
        text: "Trade confidently knowing your funds are completely separate from our assets. Also, Customer information is protected by us.",
      },
      {
        icon: "SpeedSvg",
        title: "Wide range of contracts",
        text: `Trade on more than 200 symbols including currency pairs, metals, energy,
      stocks and CFDs.`,
      },
      {
        icon: "NoteSvg",
        title: "Exceptional value",
        text: "Maximize your profits by trading your preferred assets with ultra-narrow spreads, minimal commissions, and precise execution.",
      },
    ]);
    return {
      guaranties,
    };
  },
};
