<template>
  <div class="container">
    <div class="left">
      <div class="line"></div>
      <div class="title">{{title}}</div>
    </div>
    <div class="right">
      <div class="more">查看更多</div>
      <img src="../../../static/images/首页icon/icon-sy-go@3x.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:String
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.jsb
  display flex
  justify-content space-between
.container
  @extends .jsb
  padding 0 40px
  margin-top 46px
  .left
    @extends .jsb
    align-items center
    .line
      width 4px
      height 25px
      background red
      margin-right 13px
    .title
      font-size 30px
      color #1A1A1A
  .right
    @extends .jsb
    align-items center
    .more
      font-size 20px
      color #858585
      margin-right 8px
    img
      width 9px
      height 16px
</style>
