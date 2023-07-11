<template>
  <div class="container data-statistics">
    <CustomNavbar back title="统计数据" type="rank" />

    <view class="header">
      <view>月度统计<br />排名</view>
    </view>
    <view class="rank">
      <view class="self-rank">
        <text class="self-rank-name">李四</text>
        <text class="self-rank-info"> 第5名</text>
        <text class="self-rank-info">登记客户：50 集团登记：52 </text>
      </view>
      <view class="rank-list">
        <view class="rank-list-item">
          <view class="rank-index">排行</view>
          <view class="rank-user">名称</view>
          <view class="rank-personal">个人用户</view>
          <view class="rank-group">集团登记</view>
        </view>
        <view class="rank-list-item" v-for="(item, index) in 5" :key="index">
          <text class="rank-index">{{ index + 1 }}</text>
          <view class="rank-user">
            <image class="rank-user" src="/static/head.png"></image>
            <text>欧阳娜娜</text>
          </view>
          <view class="rank-personal">xxx</view>
          <view class="rank-group">xxx</view>
        </view>
      </view>
    </view>
  </div>
</template>

<script setup>
import CustomNavbar from "../../component/CustomNavbar.vue";

</script>

<style lang="scss">
page {
  background-color: #f5f5f9;
}
.data-statistics {
  .header {
    padding: 0 46rpx;
    color: #f4f8ffff;
    font-size: 61.54rpx;
    font-weight: 400;
  }
}

.rank {
  margin: 0 30rpx;
  margin-top: 80rpx;
  padding: 23rpx 15rpx;
  border-radius: 7.69rpx;
  background: linear-gradient(180deg, #d1e4ffff 0%, #ffffffff 6%);
  .self-rank {
    height: 76.92rpx;
    border-radius: 7.69px;
    opacity: 1;
    background: #258cebff;
    display: flex;
    align-items: center;
    color: white;
    padding: 0 23rpx;
    justify-content: space-between;

    .self-rank-name {
      font-size: 30.77rpx;
    }

    .self-rank-info {
      font-size: 26.92rpx;
      color: #f7f9fcff;
    }
  }

  .rank-list {
    .rank-list-item {
      // 偶数选择器
      &:nth-child(even) {
        background-color: #f7f9fc;
      }
      display: grid;
      grid-template-columns: 108rpx 1fr 123rpx 123rpx;
      height: 92rpx;
      align-items: center;
      color: #1b243d;
      font-size: 26.92rpx;
      font-weight: 400;
      .rank-index {
        text-align: center;
      }
      .rank-user {
        display: flex;
        align-items: center;
        image {
          width: 46.15rpx;
          height: 46.15rpx;
        }
        text {
          margin-left: 15rpx;
        }
      }
      .rank-personal {
        text-align: center;
      }
      .rank-group {
        text-align: center;
      }
    }
  }
}
</style>
