<template>
  <div class="container">
      <img src="" alt="" />
    <div class="info">
      <div class="l1">厦门市思明区望海路软件园二期朝</div>
      <div class="l2">厦门市思明区望海路软件园二期朝|200㎡</div>
      <div class="l3">
        <span class="l3_1"></span>
        <span class="l3_2"></span>
        <span class="l3_3"></span>
        <span class="l3_4"></span>
      </div>
      <div class="l4">
        <span class="l4_l"></span>
        <span class="l4_r">
          <span class="l4_r_1"></span>
          <span class="l4_r_2"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.jsc
  display flex
  justify-content space-between
  align-items center
.container
  @extends .jsc
  font-size 0
  margin-top 11px
  padding 14px 20px 15px 20px
  img
    width 290px
    height 193px
  .info

    .l1
    .l2
    .l3
      .l3_1
      .l3_2
      .l3_3
      .l3_4
    .l4
      .l4_l
      .l4_r
        .l4_r_1
        .l4_r_2
</style>
