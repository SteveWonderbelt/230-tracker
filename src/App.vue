<template>
  <v-app>
    

    <v-main>
      <LandingPage />
    </v-main>
  </v-app>
</template>

<style>

</style>
<script>
import LandingPage from "./components/LandingPage"

export default {
  name: "App",

  components: {
    LandingPage
  },

  data: () => ({
    //
  })
};
</script>
