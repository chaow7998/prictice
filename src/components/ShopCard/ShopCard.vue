<template>
  <div class="container">
    <div class="item">
      <img src="../../../static/images/首页icon/room.jpg" alt="" />
    <div class="info">
      <div class="l1">厦门市思明区望海路软件园二期朝</div>
      <div class="l2">厦门市思明区望海路软件园二期朝|200㎡</div>
      <div class="l3">
        <span class="l3_1">餐饮美食</span>
        <span class="l3_2">奶茶糕点</span>
        <span class="l3_3">生鲜水果</span>
        <span class="l3_4">其他</span>
      </div>
      <div class="l4">
        <span class="l4_l">￥18800元</span>
        <span class="l4_r">05-09 &nbsp; 08:55</span>
      </div>
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
.ellipsis
  display block
  text-overflow ellipsis
  white-space nowrap
  overflow hidden
.jsc
  display flex
  justify-content space-between
  align-items center
.container
  .item
    @extends .jsc
    font-size 0
    margin-top 11px
    padding 14px 20px 15px 20px
    img
      width 290px
      height 193px
      margin-right 13px
    .info
      @extends .jsc
      height 193px
      width 403px
      align-items flex-start
      flex-flow column nowrap
      .l1
        @extends .ellipsis
        width 100%
        font-size 28px
        color: #434343;
      .l2
        @extends .ellipsis
        width 304px
        font-size 24px
        color: #434343;
      .l3
        @extends .jsc
        width 100%
        font-size 22px
        color: #EC514E;
        &span:nth-of-type(1,2,3)
          width 109px
          height 32px
          background url('../../../static/images/首页icon/icon-sy-blcs-rectangle1@3x.png');
          background-repeat no-repeat;
          background-size 100% 100%;
        &span:nth-of-type(4)
          width 59px
          height 32px
      .l4
        @extends .jsc
        width 100%
        .l4_l
          font-size 28px
          color: #EC514E;
        .l4_r
          font-size 18px
          color: #7A7A7A
</style>
