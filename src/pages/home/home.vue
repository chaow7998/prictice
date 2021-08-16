<template>
  <div class="box">
    <div class="top">
      <div class="top_s1">
        <div class="top_left">
          <img class="top_left_a" src="../../../static/images/首页icon/icon-sy-address@3x.png" />
          <span>上海</span>
          <img class="top_left_b" src="../../../static/images/首页icon/icon-sy-bottom@3x.png" />
        </div>
        <van-search v-model="value" :left-icon="searchIopn" shape="round" placeholder="请输入搜索关键词" />
      </div>
    </div>
    <div class="content">
      <div class="c_l1">
        <img src="../../../static/images/首页icon/icon-sy-ad-rectangle1@3x.png" alt="" />
        <img src="../../../static/images/首页icon/icon-sy-ad-rectangle2@3x.png" alt="" />
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
        <span>恭喜尾号8888顾客购买好铺多客户会员服务；恭喜尾号6666顾客购买好铺多房东会员服务； 恭喜尾号8888顾客购买好铺多客户会员服务；恭喜尾号6666顾客购买好铺多房东会员服务；</span>
      </div>
      <div class="c_l5">
        <img src="../../../static/images/首页icon/icon-sy-ad-kthy@3x.png" alt="" />
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
        <img src="../../../static/images/首页icon/icon-sy-cksp@3x.png" alt="" />
        <div class="info">
          <div class="desc">思明区-软件园二期|200m^</div>
          <div class="address_price">
            <span class="address">>望海路-软件园二期</span>
            <span class="price">￥1.8万/月</span>
          </div>
          <div class="label">
            <span>餐饮美食</span>
            <span>奶茶糕点</span>
            <span>生鲜水果</span>
          </div>
        </div>
      </div>
      <div class="c_l9">
        <img src="../../../static/images/首页icon/icon-sy-cksp@3x.png" alt="" />
      </div>
      <More :title="recommends.guwen" />
      <div class="c_l10">
        <img src="../../../static/images/首页icon/icon-sy-zdxz-tx@3x.png" alt="" />
        <img src="../../../static/images/首页icon/renwu.jpg" alt="" />
        <img src="../../../static/images/首页icon/renwu.jpg" alt="" />
        <img src="../../../static/images/首页icon/renwu.jpg" alt="" />
      </div>
      <div class="c_l11">
        <img src="../../../static/images/首页icon/icon-sy-zdxz-bg@3x.png" alt="" />
        <div class="info">
          <div class="name">石跃军</div>
          <div class="industry">
            <span>擅长行业：</span>
            <span>休闲娱乐，服装鞋包，百货超市</span>
          </div>
          <div class="num">
            <span>服务过的人数：</span>
            <span>2385人</span>
          </div>
          <div class="detail">
            <span>查看详情</span>
            <img src="../../../static/images/首页icon/icon-sy-cyms-go@3x.png" alt="" />
          </div>
        </div>
      </div>
      <More :title="recommends.hezuo" />
      <div class="c_l12">
        <div>
          <img src="../../../static/images/首页icon/waipo.jpg" alt="" />
        </div>
        <div>
          <img src="../../../static/images/首页icon/xibei.jpg" alt="" />
        </div>
        <div>
          <img src="../../../static/images/首页icon/waipo.jpg" alt="" />
        </div>
        <div>
          <img src="../../../static/images/首页icon/xibei.jpg" alt="" />
        </div>
      </div>
      <More :title="recommends.success" />
      <div class="c_l13">
        <div>
          <img src="../../../static/images/首页icon/meinv.jpg" alt="" />
          <div class="desc"><span>30天快速开店，好铺多助力王先生快速开店</span></div>
        </div>
        <div>
          <img src="../../../static/images/首页icon/meinv.jpg" alt="" />
          <div class="desc"><span>30天快速开店，好铺多助力王先生快速开店</span></div>
        </div>
      </div>
      <More :title="recommends.giss" hiddenicon="true"/>
	  <ShopCard />
    </div>
  </div>
</template>

<script>
import More from '../../components/More/More';
import Info from '../../components/Info/Info';
import ShopCard from '../../components/ShopCard/ShopCard';
export default {
  components: {
    More,
    Info,
	ShopCard
  },
  data() {
    return {
      value: '',
      recommends: {
        haopuduo: '好铺多精选',
        food: '餐饮美食专题',
        supperMarket: '便利超市专题',
        guwen: '转店选址顾问',
        hezuo: '品牌合作',
        success: '成交案例',
        giss: '猜你喜欢'
      },
      searchIopn: '../../../static/images/首页icon/icon-sy-search@3x.png'
    };
  }
};
</script>

<style lang="stylus" scoped>
.box
	font-size 0
	.top
		background url('../../../static/images/首页icon/icon-sy-ad@3x.png');
		background-repeat no-repeat;
		background-size 100% 100%;
		width 750px;
		height 364px;
		.top_s1
			display flex;
			justify-content space-evenly;
			align-items center;
			height 79px;
			.top_left
				display flex;
				align-items center;
				.top_left_a
					width 24px;
					height 30px;
					margin-right 1px;
				span
					font-size 34px;
					margin-right 1px;
				.top_left_b
					width 19px;
					height 10px;
			.van-search
				border-radius 40px;
				padding 0;
				width 522px;
				height 57px;
	.content
		.c_l1
			display flex;
			justify-content center;
			height 10px;
			margin-top 12px;
			img
				margin 0 4px;
				height 10px;
				width 19px;
		.c_l2
			display flex;
			justify-content space-between;
			margin-top 38px;
			padding 0 42px;
			.c_l2_item
				display flex;
				flex-flow column wrap;
				img
					width 98px;
					height 98px;
				span
					font-size 22px;
					margin-top 18px;
		.c_l3
			display flex;
			justify-content space-between;
			padding 0 40px;
			margin-top 43px;
			img
				width 322px;
				height 182px;
		.c_l4
			display flex;
			justify-content space-between;
			align-items center;
			padding 0 61px 0 49px;
			margin-top 36px;
			img
				width 62px;
				height 54px;
			span
				display block;
				width 566px;
				height 33px;
				font 14px / 33px 'PingFang-SC-Medium';
				text-overflow ellipsis;
				white-space nowrap;
				overflow hidden;
		.c_l5
			margin-top 19px;
			padding 0 34px;
			img
				width 682px;
				height 194px;
		.c_l6
			display flex;
			justify-content space-between;
			padding 0 40px 0 32px;
			margin-top 27px;
			font-size 0;
			.left
				position relative;
				width 443px;
				height 315px;
				background url('../../../static/images/首页icon/icon-sy-jx-bg@3x.png');
				background-size 100% 100%;
				img
					width 443px;
					height 218px;
				.info
					margin-left 17px;
					margin-top 16px;
				.type
					position absolute;
					display block;
					right 25px;
					bottom 111px;
					color #858585;
					width 108px;
					height 32px;
					font-size 14.4px;
					background #ffffff;
					text-overflow ellipsis;
					white-space nowrap;
					overflow hidden;
			.right
				width 214px;
				height 300px;
				background url('../../../static/images/首页icon/icon-sy-cjal-bg@3x.png');
				background-size 100% 100%;
				img
					width 214px;
					height 218px;
				.info
					margin-left 9px;
					margin-top 16px;
		.c_l7
			position relative;
			margin-top 30px;
			padding 40px;
			width 670px;
			height 300px;
			background url('../../../static/images/首页icon/card3.jpg');
			background-size 100% 100%;
			.tuijian
				position absolute;
				top 0;
				right 19px;
				width 88px;
				height 89px;
			.info
				position absolute;
				bottom 8px;
				left 13px;
				width 627px;
				// height 51px
				font-size 20px;
				.desc
					overflow hidden;
					text-overflow ellipsis;
					// display: -webkit-box;
					-webkit-line-clamp 2;
					-webkit-box-orient vertical;
				.goDetail
					span
						color #EC514E;
						height 19px;
						vertical-align middle;
					img
						margin-left 2px;
						width 9px;
						height 16px;
						vertical-align middle;
		.c_l8
			padding 0 40px;
			margin-top 22px;
			height 146px;
			display flex;
			justify-content space-between;
			img
				width 222px;
				height 146px;
			.info
				display flex;
				flex-flow column;
				justify-content space-between;
				width 430px;
				.desc
					font-size 28px;
					color #767676;
				.address_price
					display flex
					justify-content space-between
					.address
						font-size 24px;
						color #767676;
					.price
						font-size 28px;
						font-weight bold;
						color #EC514E;
				.label
					font-size 0
					span
						font-size 20px
						width 101px
						height 30px
						margin-right 8px
					& >span:nth-of-type(1)
						color #EC514E
						background url('../../../static/images/首页icon/icon-sy-blcs-rectangle1@3x.png');
						background-size 100% 100%;
					& >span:nth-of-type(2)
						color #27BAFF
						background url('../../../static/images/首页icon/icon-sy-blcs-rectangle2@3x.png');
						background-size 100% 100%;
						// background-repeat no-repeat
					& >span:nth-of-type(3)
						color #94F32E
						background url('../../../static/images/首页icon/icon-sy-blcs-rectangle3@3x.png');
						background-size 100% 100%;
		.c_l9
			padding 0 40px;
			margin-top 38px
			img
				width 670px;
				height 247px;
		.c_l10
			margin-top 32px
			padding 0 92px 0 60px
			display flex
			justify-content space-between
			img
				width 123px
				height 123px
				border-radius 50%
		.c_l11
			position relative
			margin-top 16px
			padding 0 67px
			color #373737
			img
				width 616px
				height 243px
			.info
				font-size 24px
				position absolute
				left 0
				top 0
				right 0
				bottom 0
				padding 39px 0 45px 90px
				display flex
				flex-direction  column
				justify-content space-between
				// z-index 10
				// .name
				// .industry
				// 	.span
				// 	.span
				// .num
				// 	.span
				// 	.span
				.detail
					span
						color #EC514E
					img
						width 9px
						height 16px
		.c_l12
			margin-top 25px
			padding 0 43px
			display flex
			justify-content space-between
			align-items center
			div
				display flex
				justify-content center
				align-items center
				width 149px
				height 121px
				background url('../../../static/images/首页icon/icon-sy-pphz-bg@3x.png');
				background-size 100% 100%;
				img
					width 121px
					height 57px
		.c_l13
			margin-top 17px
			padding 0 31px
			display flex
			justify-content space-between
			div
				display flex
				flex-direction column
				flex-wrap nowrap
				justify-content space-between
				align-items center
				width 329px
				height 325px
				background url('../../../static/images/首页icon/icon-sy-cjal-bg@3x.png');
				background-size 100% 100%;
				img
					width 310px
					height 191px
					margin 9px 0 0 9px
				.desc
					width 310px
					height 116px
					text-align start
					display flex
					flex-direction row
					align-items center
					span
						// height 65px
						font-size 28px
						line-height: 38px;
						color: #1A1A1A;
						font-weight: 500;
					
					
</style>
