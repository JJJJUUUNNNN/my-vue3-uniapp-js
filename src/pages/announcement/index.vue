<template>
  <view class="announcement">
    <view class="content">
      <view class="item" v-for="i in 3">
        <view class="info">
          <view class="title">
            县委宣传部举行党史学习教育读书班暨理论学习中心组第三次集中学习活动
          </view>
          <view class="bottom">
            <view>222</view>
            <view>9555次浏览</view>
          </view>
        </view>
        <image
          src="https://img.1ppt.com/uploads/allimg/2012/1_201214183937_1.jpg"
        ></image>
      </view>
    </view>
  </view>
</template>

<script setup></script>

<style lang="scss">
page {
  background-color: #f5f5f9;
}
.announcement {
  .content {
    margin: 23rpx 31rpx;
    background-color: #fff;
		border-radius: 15.38rpx;
  }
  .item {
    display: flex;
    justify-content: space-between;
		padding: 23.08rpx;
    .info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;

        width: 373.08rpx;
        height: 84.62rpx;
        color: #293452ff;
        font-weight: 500;
        font-family: "PingFang SC";
        text-align: left;
        line-height: 42.31rpx;
        letter-spacing: 0.48rpx;

        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        view {
          height: 38.46rpx;
          opacity: 1;
          color: #78808fff;
          font-size: 23.08rpx;
          font-weight: 400;
          line-height: 38.46rpx;
          letter-spacing: 0.48rpx;
        }
      }
    }

    image {
      width: 246.15rpx;
      height: 138.46rpx;
      border-radius: 7.69rpx;
    }
  }
}
</style>
