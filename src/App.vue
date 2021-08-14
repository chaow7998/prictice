<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar/Tabbar";
export default {
  components: { Tabbar },
  name: "App"
};
</script>

<style lang="stylus">
*
  padding 0
  margin 0
</style>
