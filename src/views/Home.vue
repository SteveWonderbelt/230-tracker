<template>
  <div>
    <v-toolbar dark prominent src="..\assets\analytics-3088958_1920.jpg">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Section 230 Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <router-link tag="button" :to="{ name: 'SectionInfo' }"
      >Section 230 Info</router-link
    >

    <router-link :to="{ name: 'FedLeg' }"
      >Federal Legislation Tracker</router-link
    >

    <router-link :to="{ name: 'StateLeg' }"
      >State Legislation Tracker</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({}),
  components: {}
};
</script>
