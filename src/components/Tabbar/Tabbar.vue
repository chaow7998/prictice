<template>
  <div>
    <van-tabbar
      v-model="active"
      route
      active-color="#EC514E"
      inactive-color="#171717"
      fixed
      placeholder 
    >
      <van-tabbar-item
        replace
        :to="tab.route"
        v-for="(tab, index) in tabs"
        :key="index"
      >
        <span>{{ tab.title }}</span>
        <template #icon="props">
          <img :src="props.active ? tab.icon.active : tab.icon.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem
  },
  data() {
    return {
      active: 0,
      tabs: [
        {
          title: "首页",
          route: "/home",
          icon: {
            active: "../../../static/tabs/icon1_active.png",
            inactive: "../../../static/tabs/icon1.png"
          }
        },
        {
          title: "铺源",
          route: "/puyuan",
          icon: {
            active: "../../../static/tabs/icon2_active.png",
            inactive: "../../../static/tabs/icon2.png"
          }
        },
        {
          title: "我的",
          route: "/my",
          icon: {
            active: "../../../static/tabs/icon3_active.png",
            inactive: "../../../static/tabs/icon3.png"
          }
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.van-tabbar
  // height 115px
  span
    font-size 24px
  img
    width 42px
    height 40px
</style>
