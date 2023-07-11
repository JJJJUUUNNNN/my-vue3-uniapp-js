<template>
  <view class="mine">
    <CustomNavbar title="" />

    <view class="header">
      <image src="/static/head.png"></image>
      <view class="header-info">
        <view class="header-name">张三</view>
        <view class="header-post">业务元</view>
      </view>
    </view>

    <view class="user-card">
      <view class="card-info">
        <view class="card-info-item">
          <view class="card-info-label">真实姓名：</view>
          <view class="card-info-value">带用名</view>
        </view>
        <view class="card-info-item">
          <view class="card-info-label">练习电话：</view>
          <view class="card-info-value">1388825632</view>
        </view>
      </view>
      <view class="face-box">
        <image src="/static/face.jpg"></image>
      </view>
    </view>

    <ListCard :list-data="menuData"></ListCard>
  </view>

  <CustomTabbar></CustomTabbar>
</template>

<script setup>
import CustomNavbar from "../../component/CustomNavbar.vue";
import CustomTabbar from "../../component/CustomTabbar.vue";
import ListCard from "../../component/card/ListCard.vue";

const menuData=ref([
  {text:'我登记的个人客户',iconSrc:'/static/head.png',url:'/pages/user/menus/register/personal'},
  {text:'我登记的集团信息',iconSrc:'/static/head.png',url:'/pages/user/menus/register/company'},
  {text:'系统设置',iconSrc:'/static/head.png',url:'/pages/user/menus/setting'},
])
</script>

<style lang="scss">
page {
  background-color: #f8f9fd;
}
.header {
  display: flex;
  align-items: center;
  padding: 0 30.76rpx;
  margin-top: 26rpx;
  height: 92.31rpx;

  image {
    width: 92.31rpx;
    height: 92.31rpx;
  }

  .header-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 15rpx;
    .header-name {
      color: #ffffffff;
      font-size: 30.77rpx;
      font-weight: 500;
    }
    .header-post {
      color: #ffffffff;
      font-size: 23.08rpx;
      font-weight: 400;
      margin-top: 8rpx;
    }
  }
}

.user-card {
  width: 688.46rpx;
  height: 246.15rpx;
  box-sizing: border-box;
  border-radius: 15.38rpx;
  background: #e9f2ffff;
  margin: 26rpx auto 0;
  justify-content: space-between;
  display: flex;

  .card-info {
    padding: 46.15rpx;
    .card-info-item {
      display: flex;
      margin-bottom: 15rpx;
      .card-info-label {
        color: #1b243dff;
        font-size: 30.77rpx;
        font-weight: 400;
      }
      .card-info-value {
        color: #1b243dff;
        font-size: 30.77rpx;
        font-weight: 500;
      }
    }
  }
  .face-box {
    padding: 31rpx;
  }
  image {
    width: 138.46rpx;
    height: 184.62rpx;
  }
}
</style>
