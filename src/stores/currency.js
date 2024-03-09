import { defineStore } from "pinia";
import axios from "axios";

export const useCurrencytStore = defineStore("currency", {
  state: () => ({
    currencies: [],
  }),

  getters: {
    get_currencies: (state) => state.currencies,
  },

  actions: {
    async get_currencies_action() {
      try {
        const { data: currenciesData } = await axios({
          url: "exchanges",
          method: "GET",
          params: {
            x_cg_demo_price: "CG-nTKLcVW692sBYc8YN2d3ejy2",
          },
        });
        console.log("data: ", currenciesData);
        this.currencies = currenciesData;
      } catch (error) {
        console.log("err in get_currencies_action: ", error);
      }
    },
  },
});
