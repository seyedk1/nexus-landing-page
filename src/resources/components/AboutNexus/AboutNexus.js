import { ref } from "vue";

export default {
  setup() {
    const aboutUs = ref(
      `The biggest obstacle to ordinary people becoming wealthy is a lack of financial information and investment capital.

      With a powerful business team that has more than 6 years of experience, today we have been able to provide a platform where all investors can safely earn money using our company's knowledge and experience in the forex market, which is the world's largest financial market.
      
      In our company, we guarantee the preservation of all investors' capital in this market, and we deliver specified monthly profits to them in the safest possible manner.
      
      The company's goal is for all investors to safely earn money from their investments for many years, and the company supports all its investors indefinitely.
      
      All investors can easily access the site and earn money based on the hedge fund nexus platform.
      `
    );
    return {
      aboutUs,
    };
  },
};
