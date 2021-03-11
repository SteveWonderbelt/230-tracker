<template>
  <div>
    <v-toolbar dark prominent src="..\assets\analytics-3088958_1920.jpg">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Section 230 Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <NavButton title="Section 230 Information" route="SectionInfo"></NavButton>
    <v-spacer></v-spacer>
    <NavButton title="Federal Legislation Tracker" route="B"></NavButton>
    <v-sapcer></v-sapcer>
    <NavButton title="State Legislation Tracker" route="C"></NavButton>
  </div>
</template>

<script>
import NavButton from "../components/NavButton.vue";
export default {
  name: "Home",

  data: () => ({}),
  components: {
    NavButton
  }
};
</script>
