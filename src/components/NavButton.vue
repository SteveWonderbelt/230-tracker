<template>
  <v-btn block elavation="2" class="ma-10" large x-large>
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  name: "NavButton",
  props: {
    title: String,
  }
};
</script>
