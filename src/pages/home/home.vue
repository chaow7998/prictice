<template>
  <div class="box">
    <div class="top">
      <div class="top_s1">
        <div class="top_left">
          <img
            class="top_left_a"
            src="../../../static/images/首页icon/icon-sy-address@3x.png"
          />
          <span>上海</span>
          <img
            class="top_left_b"
            src="../../../static/images/首页icon/icon-sy-bottom@3x.png"
          />
        </div>
        <van-search
          v-model="value"
          :left-icon="searchIopn"
          shape="round"
          placeholder="请输入搜索关键词"
        />
      </div>
    </div>
    <div class="content">
      <div class="c_l1">
        <img
          src="../../../static/images/首页icon/icon-sy-ad-rectangle1@3x.png"
          alt=""
        />
        <img
          src="../../../static/images/首页icon/icon-sy-ad-rectangle2@3x.png"
          alt=""
        />
      </div>
      <div class="c_l2">
        <div class="c_l2_item">
          <img src="../../../static/images/首页icon/icon-sy-zd@3x.png" alt="" />
          <span>转店服务</span>
        </div>
        <div class="c_l2_item">
          <img src="../../../static/images/首页icon/icon-sy-zd@3x.png" alt="" />
          <span>转店服务</span>
        </div>
        <div class="c_l2_item">
          <img src="../../../static/images/首页icon/icon-sy-zd@3x.png" alt="" />
          <span>转店服务</span>
        </div>
        <div class="c_l2_item">
          <img src="../../../static/images/首页icon/icon-sy-zd@3x.png" alt="" />
          <span>转店服务</span>
        </div>
        <div class="c_l2_item">
          <img src="../../../static/images/首页icon/icon-sy-zd@3x.png" alt="" />
          <span>转店服务</span>
        </div>
      </div>
      <div class="c_l3">
        <img src="../../../static/images/首页icon/icon-sy-ad2@3x.png" alt="" />
        <img src="../../../static/images/首页icon/icon-sy-ad1@3x.png" alt="" />
      </div>
      <div class="c_l4">
        <img src="../../../static/images/首页icon/icon-sy-ad2@3x.png" alt="" />
        <span
          >恭喜尾号8888顾客购买好铺多客户会员服务；恭喜尾号6666顾客购买好铺多房东会员服务；
          恭喜尾号8888顾客购买好铺多客户会员服务；恭喜尾号6666顾客购买好铺多房东会员服务；</span
        >
      </div>
      <div class="c_l5">
        <img
          src="../../../static/images/首页icon/icon-sy-ad-kthy@3x.png"
          alt=""
        />
      </div>
      <More :title="recommends.haopuduo" />
      <div class="c_l6">
        <div class="left">
          <img src="../../../static/images/首页icon/card1.jpg" alt="" />
          <info class="info"></info>
          <span class="type">百货/购物中心</span>
        </div>
        <div class="right">
          <img src="../../../static/images/首页icon/card2.png" alt="" />
          <info class="info"></info>
        </div>
      </div>
      <More :title="recommends.food" />
      <div class="c_l7">
        <img class="tuijian" src="../../../static/images/首页icon/icon-sy-cyms-tj@3x.png" alt="" />
        <div class="info">
          <span class="desc">
            店主自述：店铺位于顺义区鑫顺北大街，面积45平方，配套设施齐全，临街...
          </span>
          <span class="goDetail">
            <span>查看详情</span>
            <img src="../../../static/images/首页icon/icon-sy-cyms-go@3x.png" alt="" />
          </span>
        </div>
      </div>
      <More :title="recommends.supperMarket" />
      <div class="c_l8">
        <img
          src="../../../static/images/首页icon/icon-sy-cksp@3x.png"
          alt=""
        />
      </div>
      <More :title="recommends.guwen" />
    </div>
  </div>
</template>

<script>
import More from "../../components/More/More";
import Info from "../../components/Info/Info";
export default {
  components: {
    More,
    Info
  },
  data() {
    return {
      value: "",
      recommends: {
        haopuduo: "好铺多精选",
        food: "餐饮美食专题",
        supperMarket: "便利超市专题",
        guwen: "转店选址顾问",
        hezuo: "品牌合作",
        success: "成交案例",
        giss: "猜你喜欢"
      },
      searchIopn: "../../../static/images/首页icon/icon-sy-search@3x.png"
    };
  }
};
</script>

<style lang="stylus" scoped>
.box
  .top
    background url('../../../static/images/首页icon/icon-sy-ad@3x.png')
    background-repeat no-repeat
    background-size  100% 100%
    width 750px
    height 364px
    .top_s1
      display flex
      justify-content space-evenly
      align-items center
      height 79px
      .top_left
        display flex
        align-items center
        .top_left_a
          width 24px
          height 30px
          margin-right 1px
        span
          font-size 34px
          margin-right 1px
        .top_left_b
          width 19px
          height 10px
      .van-search
        border-radius  40px
        padding 0
        width 522px
        height 57px
  .content
    .c_l1
      display flex
      justify-content center
      height 10px
      margin-top 12px
      img
        margin 0 4px
        height 10px
        width 19px
    .c_l2
      display flex
      justify-content space-between
      margin-top 38px
      padding 0 42px
      .c_l2_item
        display flex
        flex-flow column wrap
        img
          width 98px
          height 98px
        span
          font-size 22px
          margin-top 18px
    .c_l3
      display flex
      justify-content space-between
      padding 0 40px
      margin-top 43px
      img
        width 322px
        height 182px
    .c_l4
      display flex
      justify-content space-between
      align-items center
      padding 0 61px 0 49px
      margin-top 36px
      img
        width 62px
        height 54px
      span
        display block
        width 566px
        height 33px
        font 14px/33px "PingFang-SC-Medium"
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
    .c_l5
      margin-top 19px
      padding 0 34px
      img
        width 682px
        height 194px
    .c_l6
      display flex
      justify-content space-between
      padding 0 40px 0 32px
      margin-top 27px
      font-size 0
      .left
        position relative
        width 443px
        height 315px
        background url('../../../static/images/首页icon/icon-sy-jx-bg@3x.png')
        background-size 100% 100%
        img
          width 443px
          height 218px
        .info
          margin-left 17px
          margin-top 16px
        .type
          position absolute
          display block
          right 25px
          bottom  111px
          color #858585
          width 108px
          height 32px
          font-size 14.4px
          background #ffffff
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
      .right
        width 214px
        height 300px
        background url('../../../static/images/首页icon/icon-sy-cjal-bg@3x.png')
        background-size 100% 100%
        img
          width 214px
          height 218px
        .info
          margin-left 9px
          margin-top 16px
    .c_l7
      position relative
      margin-top 30px
      padding 40px
      width 670px
      height 300px
      background url('../../../static/images/首页icon/card3.jpg')
      background-size 100% 100%
      .tuijian
        position absolute
        top 0
        right 19px
        width 88px
        height 89px
      .info
        position absolute
        bottom 8px
        left 13px
        width 627px
        // height 51px
        font-size 20px
        .desc
          overflow : hidden;
          text-overflow: ellipsis;
          // display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;       
        .goDetail
          span
            color #EC514E
            height 19px
            vertical-align middle
          img
            margin-left 2px
            width 9px
            height 16px
            vertical-align middle
    .c_l8
      padding 0 40px
      img
        width 670px
        height 247px

</style>
