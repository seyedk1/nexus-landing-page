import {
  Header,
  Banner,
  Currencies,
  InvestmentPlan,
  AboutNexus,
  Guaranty,
  FooterShared,
} from "@/resources/components";

import {
  CurrencySvg,
  HomeSvg,
  InvestmentSvg,
  AboutSvg,
  GuarantySvg,
  UserSvg,
} from "@/resources/components/Icons";
import { onMounted, onUnmounted, ref, watch, watchEffect } from "vue";

export default {
  components: {
    Header,
    Banner,
    Currencies,
    InvestmentPlan,
    AboutNexus,
    Guaranty,
    FooterShared,
    CurrencySvg,
    HomeSvg,
    InvestmentSvg,
    AboutSvg,
    GuarantySvg,
    UserSvg,
  },

  setup() {
    let scrollTop = ref(null);

    let drawer = ref(false);
    const toggleDrawer = () => {
      drawer.value = !drawer.value;
      console.log("drawer.value: ", drawer.value);
    };

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

    // Attach scroll event listener on component mount
    onMounted(() => {
      // console.log("scrolling mounted", window.scrollY);
      window.addEventListener("scroll", handleScroll);
      console.log("scrolling mounted");
    });

    // Remove scroll event listener on component unmount
    onUnmounted(() => {
      console.log("unMounted Home");
      window.removeEventListener("scroll", handleScroll());
    });

    // Update scrollTop on scroll
    const handleScroll = () => {
      scrollTop.value = window.scrollY;
      console.log("handle scroll is run", scrollTop.value);
      // scrollTop.value = e.target.documentElement.scrollTop;
    };


    const icons = ref([
      "HomeSvg",
      "CurrencySvg",
      "InvestmentSvg",
      "AboutSvg",
      "GuarantySvg",
      "UserSvg",
    ]);

    return {
      toggleDrawer,
      drawer,
      icons,
      // clickOutside,
      scrollTop,
      handleScroll,
      navigateTo,
      goToWebsite,
    };
  },
};
