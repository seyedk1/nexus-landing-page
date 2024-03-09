import { ref } from "vue";

export default {
  setup() {
    const title = ref(
      `Let the experts
      take care of your
      investment`
    );

    const description = ref(
      `The risks arise from not knowing what actions they will conclude.
      So, to reduce risk, increase your awareness.
      Warren Buffett`
    );
    return {
      title,
      description,
    };
  },
};
