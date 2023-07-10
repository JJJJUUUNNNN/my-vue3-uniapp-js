<template>
 <div class="container">
  <view class="rank-list">
    <view class="self-rank">
      <text class="name">李四</text>
      <view class="info-box">
        <text class="info">
        第5名 登记客户：50 集团登记：52
      </text>
      <text class="remark">*月度统计排名</text>
      </view>
    </view>
    <view class="ranking" v-for="(item,index) in 5" :key="index">
      <view class="left">
        <text class="index item">{{index+1}}</text>
        <image class="image item" src="/static/head.png"></image>
        <text class="name item">路人甲</text>
      </view>
      <view class="right">
        <view class="item">个人客户：<text>20</text></view>
        <view class="item">集团登记：<text>20</text></view>
      </view>
    </view>
  </view>
 </div>
</template>

<script setup>

</script>

<style lang="scss">
page{
  background-color: #f5f5f9;
}
.rank-list{
  padding: 0.9375rem;
  background-color: #fff;

  .self-rank{
    border-bottom: 1px solid #ccc;

  .info-box{
    margin-top: 0.3125rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.625rem;

    .remark{
      color:#BCBCBC;
      line-height: 1.25rem;
    }
  }
  }

  .ranking{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.625rem 0;

    .left{
      display: flex;
      align-items: center;

      .item{
        margin-right: 0.625rem;
      }

      .image{
        width: 2.5625rem;
        height: 2.375rem;
      }
    }

    .right{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.625rem;

      .item{
        margin-right: 5pxz;
      }
    }

    
  }
}
</style>