<template>
  <div>
    <div id="buttonHolder">
      <router-link :to="{ name: 'SectionInfo' }" tag="button" class="buttons"
        >Section 230 Info</router-link
      >

      <router-link :to="{ name: 'FedLeg' }" tag="button" class="buttons"
        >Federal Legislation Tracker</router-link
      >

      <router-link :to="{ name: 'StateLeg' }" tag="button" class="buttons"
        >State Legislation Tracker</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({}),
  components: {}
};
</script>
<style scoped>
.buttons {
  position: relative;
  vertical-align: top;
  width: 100%;
  height: 60px;
  padding: 0;
  font-size: 22px;
  color: white;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background: #1216f3f6;
  border: 0;
  border-bottom: 2px solid #0c3fe8;
  cursor: pointer;
  -webkit-box-shadow: inset 0 -2px #0c64e8;
  box-shadow: inset 0 -2px #0c34e8;
  margin: 1em;
}
.buttons:active {
  top: 1px;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
