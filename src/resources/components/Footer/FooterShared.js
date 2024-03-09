import { ref } from "vue";

export default {
  setup() {
    const countries = ref([
      "Canada",
      "england",
      "Sweden",
      "Denmark",
      "Star",
      "Japan",
      "Turkey",
      "us",
    ]);

    const socialMedia = ref([
      "facebook",
      "instagram",
      "linkedin",
      "twitter",
      "youtube",
    ]);
    return {
      countries,
      socialMedia
    };
  },
};
