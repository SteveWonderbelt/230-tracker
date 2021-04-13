<template>
  <div id="data">
    <h1>Bitcoin Price Index</h1>
    <section v-if="errored">
      <p>
        We're sorry, we aren't able to get this information at the moment,
        please try back later
      </p>
    </section>
    <section v-else>
      <div v-if="loading">Loading...</div>

      <!-- <div v-else v-for="currency in info" :key="currency" class="currency">
        {{ currency.description }}:
        <span class="lighten">
          <span v-html="currency.symbol"></span
          >{{ currency.rate_float | currencydecimal }}
        </span>
      </div> -->
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Data",

  data: () => ({
    info: null,
    loading: true,
    errored: false,
  }),

  mounted() {
    axios
      .get(
        "https://api.govinfo.gov/collections/BILLS/2021-03-25T20%3A18%3A10Z-04%3A00%3A00?offset=0&pageSize=2&api_key=M0dOXyBYv4LkhdqORrP79V4RgWClPV9PzV4H4wvG"
      )
      .then((response) => {
        this.info = response.data.bpi;
      })
      .catch((error) => console.log(error))
      .finally(() => (this.loading = false));
  },
  /* mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        this.info = response.data.bpi;
      })
      .catch((error) => console.log(error))
      .finally(() => (this.loading = false));
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  }, */
};
</script>
