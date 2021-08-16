<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from './components/Tabbar/Tabbar';
export default {
  components: { Tabbar },
  name: 'App'
};
</script>

<style lang="stylus">
*
  padding 0
  margin 0
html,body
  width: 100%
  height: 100%
  overflow: scroll
html::-webkit-scrollbar,
body::-webkit-scrollbar
  width:0px
  height:0px
body
  margin:0
</style>
