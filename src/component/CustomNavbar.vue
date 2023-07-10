<template>
  <view
    class="custom-navbar"
    :style="{
      height: `${menuButtonRes.height}px`,
      paddingTop: menuButtonRes.top + 'px',
    }"
  >
    <image v-if="type === 'base'" class="bg" src="/static/home-bg.png"></image>
    <image
      v-if="type === 'rank'"
      class="bg"
      src="/static/home-bg-rank.png"
    ></image>
    <view
      class="title"
      :class="{ back }"
      :style="{
        height: menuButtonRes.height + 'px',
      }"
    >
      <image v-if="back" @click="handleBack()" class="back-img" src="/static/back.png"></image>
      {{ title }}
    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "base",
  },
  back: {
    type: Boolean,
    default: false,
  },
});

const menuButtonRes = uni.getMenuButtonBoundingClientRect();

function handleBack(){
  uni.navigateBack()
}
</script>

<style lang="scss">
.custom-navbar {
  height: 468rpx;
  width: 750rpx;
  position: relative;

  .bg {
    width: 750rpx;
    height: 450rpx;
    position: absolute;
    z-index: -1;
    top: 0;
  }

  .title {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 35rpx;
    padding-left: 38.46rpx;
    color: #fafbff;
    font-weight: 900;
    position: relative;
    &.back {
      justify-content: center;
      padding-left: 0rpx;
    }
    .back-img{
      position: absolute;
      width: 40rpx;
      height: 40rpx;
      left: 15rpx;
    }
  }

  .custom-left {
    position: absolute;
    top: 0;
    font-size: 1.29rem;
    color: #fafbff;
    z-index: 99;
  }
}
</style>
