import { ref } from "vue";
import HandsSvg from "@/resources/components/Icons/HandsSvg.vue";
import HomeSvg from "@/resources/components/Icons/HomeSvg.vue";
import MoneySvg from "@/resources/components/Icons/MoneySvg.vue";
import OrganizationSvg from "@/resources/components/Icons/OrganizationSvg.vue";
import SuitcaseSvg from "@/resources/components/Icons/SuitcaseSvg.vue";
import UserSvg from "@/resources/components/Icons/UserSvg.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMenu } from "@mdi/js";

export default {
  components: {
    HandsSvg,
    HomeSvg,
    MoneySvg,
    OrganizationSvg,
    SuitcaseSvg,
    UserSvg,
    SvgIcon,
  },

  setup() {
    const path = ref(mdiMenu);
    const icons = ref([
      "HomeSvg",
      "HandsSvg",
      "MoneySvg",
      "OrganizationSvg",
      "SuitcaseSvg",
      "UserSvg",
    ]);

    // let drawer = ref(false);
    return {
      icons,
      path,
      // drawer,
    };
  },
};
