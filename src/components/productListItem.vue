<template>

  <li>
    <a href="javascript:void(0);" class="item">
      <div class="pic_box "><img v-lazy="product.Content.imageurl">
      </div>
      <div class="middle">
        <div class="title_box">
          {{product.Content.warename}}
        </div>
        <div class="active_box">
        </div>
        <div class="comment_box"><span class="comment"><i class="icon-dialog"></i>{{product.commentcount}}</span><span
          class="percentage"><i class="icon-good"></i>{{product.good}}%</span></div>
      </div>
      <div class="price_box">
						<span class="new_price ">
							<div class="price_num"><small>¥</small><i>{{integralPart}}<small>.{{fractionalPart}}</small></i></div>

						</span>
        <span class="bug_car ">
								<i class="icon-shop_cart"></i>
							</span>
      </div>
    </a>
  </li>
</template>

<script>
  import {Lazyload} from 'mint-ui'
  import Vue from 'vue'
  Vue.use(Lazyload)

  export default{
    name: 'product',
    props: {
      product: {
        type: Object
      }
    },
    computed: {
      integralPart: function () {
        return this.product.dredisprice.split('.')[0]
      },
      fractionalPart: function () {
        return this.product.dredisprice.split('.')[1]
      }
    }
  }
</script>

<style scoped>
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
</style>
