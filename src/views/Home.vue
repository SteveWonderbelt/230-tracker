<template>
  <div>
    <v-toolbar dark prominent src="..\assets\analytics-3088958_1920.jpg">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Section 230 Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <div>
      <router-link :to="{ name: 'SectionInfo' }" tag="button" id="buttons"
        >Section 230 Info</router-link
      >

      <router-link :to="{ name: 'FedLeg' }" tag="button" id="buttons"
        >Federal Legislation Tracker</router-link
      >

      <router-link :to="{ name: 'StateLeg' }" tag="button" id="buttons"
        >State Legislation Tracker</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({}),
  components: {},
};
</script>
<style scoped>
#buttons{
  background-color: blue;
  margin: 10px;
}
</style>
