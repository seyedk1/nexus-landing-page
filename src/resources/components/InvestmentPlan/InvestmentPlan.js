import { ref } from "vue";

export default {
  setup() {
    const contractPeriods = ref(["1", "3", "6", "12"]);
    const profitPercentage = ref(["5%", "4%-6%", "6%-9%", "6%-9%"]);
    return {
      contractPeriods,
      profitPercentage,
    };
  },
};
