<template>
  <v-footer color="primary lighten-1" padless absolute>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        :to="{ name: link }"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",

  data: () => ({
    links: ["Home", "About", "Team", "Services", "Blog", "Contact Us"]
  }),
  components: {}
};
</script>
