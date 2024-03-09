import { onUnmounted, ref } from "vue";

import {
  CurrencySvg,
  HomeSvg,
  InvestmentSvg,
  AboutSvg,
  GuarantySvg,
  UserSvg,
} from "@/resources/components/Icons";

import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMenu } from "@mdi/js";

export default {
  components: {
    CurrencySvg,
    HomeSvg,
    InvestmentSvg,
    AboutSvg,
    GuarantySvg,
    UserSvg,
    SvgIcon,
  },

  setup() {
    const path = ref(mdiMenu);
    const icons = ref([
      "HomeSvg",
      "CurrencySvg",
      "InvestmentSvg",
      "AboutSvg",
      "GuarantySvg",
      "UserSvg",
    ]);

    const goToWebsite = (url) => {
      window.location.href = url;
    };

    const navigateTo = (icon) => {
      console.log("which hash: ", icon);
      // const a = icon.split("Svg");
      const hash = icon.toLowerCase().replace("svg", "");
      const targetElement = document.getElementById(hash);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    onUnmounted(() => {
      console.log("unMount Header");
    });
    return {
      icons,
      path,
      navigateTo,
      goToWebsite,
    };
  },
};
