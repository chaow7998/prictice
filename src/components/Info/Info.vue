<template>
  <div class="container">
    <span class="name">丰台-科技园区 | 140^</span>
    <span class="desc">可餐饮 可明火 宽门面 临近学校</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
.hiddenText
  display block
  text-overflow ellipsis
  white-space nowrap
  overflow hidden
.container
  display flex
  flex-flow column
  justify-content space-between
  color #858585
  .name
    @extends .hiddenText
    font-size 18px
  .desc
    @extends .hiddenText
    font-size 16px
</style>