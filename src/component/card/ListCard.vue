<template>
  <view class="list-card">
    <text v-if="title!==''" class="title">{{ title }}</text>
    <view class="list-item" v-for="(item,index) in listData" :key="index">
      <view class="left-info">
        <image v-if="item.iconSrc!==undefined" class="icon" :src="item.iconSrc"></image>
        <text class="title text">{{ item.text }}</text>
        <text v-if="item.content!=undefined" class="text">{{ item.content }}</text>
      </view>
      <view class="right-info">
        <image v-if="item.rightImg!==undefined" class="image" :src="item.rightImg"></image>
        <text  v-if="item.rightInfo!==undefined" class="text">{{ item.rightInfo }}</text>
        <switch v-if="item.switch"  checked color="#07C160" style="transform:scale(0.7)"/>
        <image v-if="item.notLink===undefined" class="right-arrow" src="/static/right-arrow.png" @click="goToPage(item.url)"></image>
      </view>
    </view>
  </view>
</template>

<script setup>

const props=defineProps({
  listData:{
    type:Array,
    default:()=>[]
  },
  title:{
    type:String,
    default:''
  }
})

function goToPage(path){
  uni.navigateTo({
    url:path
  })
}

</script>

<style lang="scss">
.list-card{
  width: 688.46rpx;
  margin: 29rpx auto 0;
  background: #ffffffff;
  padding: 23.08rpx;
  box-sizing: border-box;

  .title{
    color: #1b243dff;
    font-size: 30.77rpx;
    font-weight: 500;
  }

  .list-item{
    height: 76.92rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-info{
      display: flex;
      align-items: center;

      .text{
        color: #1b243dff;
        font-size: 26.92rpx;
      }

      .icon{
        width: 46.15rpx;
        height: 46.15rpx;
        margin-right: 10rpx;
      }
    }

    .right-info{
        display: flex;
        align-items: center;

        .image{
          width: 46.15rpx;
          height: 46.15rpx;
          border-radius: 50%;
        }

        .text{
          color: #78808fff;
          font-size: 26.92rpx;
        }

        .right-arrow{
          width: 46.15rpx;
          height: 46.15rpx;
      }
    }
  }
}
</style>