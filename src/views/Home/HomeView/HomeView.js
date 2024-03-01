import {
  Header,
  Banner,
  InvestmentPlan,
  AboutNexus,
  Guaranty,
  FooterShared,
} from "@/resources/components";

import {
  HandsSvg,
  HomeSvg,
  MoneySvg,
  OrganizationSvg,
  SuitcaseSvg,
  UserSvg,
} from "@/resources/components/Icons";
import { ref } from "vue";

export default {
  components: {
    Header,
    Banner,
    InvestmentPlan,
    AboutNexus,
    Guaranty,
    FooterShared,
    HandsSvg,
    HomeSvg,
    MoneySvg,
    OrganizationSvg,
    SuitcaseSvg,
    UserSvg,
  },

  setup() {
    let drawer = ref(false);
    const toggleDrawer = () => {
      drawer.value = !drawer.value;
      console.log("drawer.value: ", drawer.value);
    };


    const icons = ref([
      "HomeSvg",
      "HandsSvg",
      "MoneySvg",
      "OrganizationSvg",
      "SuitcaseSvg",
      "UserSvg",
    ]);

    return {
      toggleDrawer,
      drawer,
      icons,
    };
  },
};
