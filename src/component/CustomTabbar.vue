<template>
  <view class="custom-tabbar">
    <view class="tabbar-item" @click="goToPage('/pages/home/index')">
      <uni-icons custom-prefix="custom-icon" type="home-filled" size="20" :color="isActive?'#258CEB':'#222628'"></uni-icons>
      <text class="tabbar-item-title" :class="{active:isActive}">主页</text>
    </view>
    <view class="tabbar-item" @click="goToPage('/pages/search/index')">
      <view class="tabbar-item-search">
        <image class="image" src="/static/icon-search.png"></image>
      </view>
    </view>
    <view class="tabbar-item" @click="goToPage('/pages/user/index')">
      <uni-icons custom-prefix="custom-icon" type="person-filled" size="20" :color="isActive?'#258CEB':'#222628'"></uni-icons>
      <text class="tabbar-item-title" :class="{active:isActive}">个人</text>
    </view>
  </view>
</template>

<script setup>

function goToPage(path){
  uni.navigateTo({
    url:path
  })
}
</script>

<style lang="scss">
.custom-tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 128.85rpx;
  background-color: #fff;
  // box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
  padding-bottom: 20rpx;

  .tabbar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .tabbar-item-title:active{
      color: #258CEB;
      font-size: 23.08rpx;
    }

    .tabbar-item-title{
      color: #000;
      font-size: 23.08rpx;
    }
  }

  .tabbar-item-search{
    position: absolute;
    top: -20rpx;
    background-color: #fff;
    padding: 10rpx;
    border-radius: 50%;

    .image{
      width: 115.69rpx;
      height: 115.69rpx;
    }
  }
}
</style>