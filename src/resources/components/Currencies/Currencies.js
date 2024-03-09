// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import required modules
import { Navigation, Thumbs, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import "swiper/scss/autoplay";
import { useCurrencytStore } from "@/stores/currency";
import { onMounted } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useCurrencytStore();

    const { get_currencies_action } = store;

    onMounted(() => {
      get_currencies_action();
    });
    return {
      store,
      modules: [Navigation, Thumbs, Autoplay],
    };
  },
};
