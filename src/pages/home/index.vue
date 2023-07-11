<template>
  <view class="home">
    <CustomNavbar title="移动客户管理系统" />
    <view class="header">
      <image src="/static/head.png"></image>
      <text class="username">林芝业</text>
      <text class="userpost">业务员</text>
    </view>
    <view class="main">
      <!-- banner -->
      <image
        class="banner"
        src="https://img.1ppt.com/uploads/allimg/2012/1_201214183937_1.jpg"
        alt=""
      ></image>
      <!-- 统计数据 -->
      <view class="statistics">
        <view class="statistics-top">
          <text>数据统计</text>
          <text class="more" @click="checkMore">查看更多 ></text>
        </view>
        <view class="statistics-bottom">
          <view class="statistics-item">
            <text class="count blue">852</text>
            <text class="title">登记客户数</text>
          </view>
          <view class="statistics-item">
            <text class="count yellow">85</text>
            <text class="title">登记集团数</text>
          </view>
        </view>
      </view>
      <!-- 广告 -->
      <view class="ad">
        <image src="/static/home-ad1.png" @click="setPersonalInfo"></image>
        <image src="/static/home-ad2.png" @click="setCompanyProducInfo"></image>
      </view>
      <!-- 通知公告 -->

      <view class="notice">
        <view class="notice-title">
          <text>通知公告</text>
          <view class="more" @click="handleMessage"
            >未读消息 <text class="num">3</text>
          </view>
        </view>
        <view class="notice-list">
          <view
            class="notice-list-item"
            v-for="(item, index) in 3"
            :key="index"
            @click="getDetail"
          >
            <view class="title"
              ><view class="bot"></view>关于用户信息管理方式</view
            >
            <view class="info">发布于：铁通公司 2022年5月1日</view>
            <view class="more">></view>
          </view>
        </view>
      </view>
    </view>

      <!-- <view class="bottom-tab-bar">
      <view v-for="(tab, index) in tabs" :key="index" class="tab-item" :class="{ active: index === activeIndex }" @click="handleTabClick(index)">
        <image :src="tab.icon" class="tab-icon"></image>
        <text class="tab-title">{{ tab.title }}</text>
      </view>
    </view> -->
  </view>

  <CustomTabbar></CustomTabbar>
</template>

<script setup>
import CustomNavbar from "../../component/CustomNavbar.vue";
import CustomTabbar from '../../component/CustomTabbar.vue'

function checkMore() {
  console.log("统计数据");
  uni.navigateTo({
    url: "/pages/statistics/dataStatistics",
  });
}

function setPersonalInfo() {
  console.log("个人信息登记");
  uni.navigateTo({
    url: "/pages/statistics/personalInfo",
  });
}

function setCompanyProducInfo() {
  console.log("集团产品信息登记");
  uni.navigateTo({
    url: "/pages/statistics/companyProductInfo",
  });
}

function handleMessage() {
  console.log("通知公告");
  uni.navigateTo({
    url: "/pages/announcement/index",
  });
}

function getDetail() {
  console.log("平台通知公告");
  uni.navigateTo({
    url: "/pages/announcement/platformAnnouncement/index",
  });
}

const windowWidth = ref(0);

onMounted(() => {
  uni.getSystemInfo({
    success: (res) => {
      windowWidth.value = res.windowWidth;
    },
  });
});


// export default {
//   props: {
//     tabs: {
//       type: Array,
//       default: () => []
//     },
//     activeIndex: {
//       type: Number,
//       default: 0
//     }
//   },
//   methods: {
//     handleTabClick(index) {
//       this.$emit('tabClick', index);
//     }
//   }
// };
</script>

<style lang="scss">
.home {
  padding-bottom: 100px;

  .header {
    margin-top: 12rpx;
    padding: 0 31rpx;
    display: flex;
    align-items: center;
    color: white;
    image {
      width: 62rpx;
      height: 62rpx;
      border-radius: 62rpx;
    }

    .username {
      font-size: 31rpx;
      font-weight: 700;
      margin-left: 15rpx;
    }
    .userpost {
      font-size: 26.92rpx;
      font-weight: 500;
      margin-left: 15rpx;
    }
  }

  .main {
    padding: 0 30rpx;
    //  banner
    .banner {
      width: 100%;
      height: 292.31rpx;
      margin: 30rpx auto 0;
      display: block;
      border-radius: 10rpx;
    }
    // 统计
    .statistics {
      width: 100%;
      background-color: #f5f9ffff;
      margin-top: 23rpx;
      border-radius: 15.38rpx;
      .statistics-top {
        display: flex;
        align-items: center;
        font-size: 30.77rpx;
        font-weight: 500;
        height: 76.92rpx;
        padding: 0 28rpx;
        justify-content: space-between;
        color: #1b243d;
        .more {
          color: #78808f;
          font-size: 23.08rpx;
        }
      }

      .statistics-bottom {
        display: flex;

        .statistics-item {
          display: flex;
          flex-direction: column;
          flex: 1;
          text-align: center;
          justify-content: center;
          height: 123rpx;

          .count {
            font-size: 46.15rpx;
            font-weight: 600;
            &.blue {
              color: #0550f7;
            }
            &.yellow {
              color: #ff991f;
            }
          }
          .title {
            font-size: 23.08rpx;
            margin-top: 10rpx;
            color: #78808fff;
          }
        }
      }

      .data-statistics {
        width: 20.5625rem;
        border-radius: 0.625rem;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        padding: 0.9375rem;
        box-sizing: border-box;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .more {
            color: #aaa;
          }
        }

        .data-item-box {
          display: flex;
          justify-content: space-between;
          margin: 0 1.875rem;

          .data-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.625rem;

            .count {
              color: #666ee8;
              font-size: 1.25rem;
            }

            .title {
              color: #333;
            }
          }
        }
      }

      .info {
        display: flex;
        width: 20.5625rem;
        height: 5.9375rem;
        justify-content: space-between;
        align-items: center;

        .item {
          width: 9.625rem;
          height: 4.9375rem;
          border-radius: 0.3125rem;
          display: flex;
          align-items: center;
          padding: 0.625rem;
          box-sizing: border-box;

          .image {
            width: 2.0625rem;
            height: 1.6875rem;
            margin: 9px;
          }
        }
      }
    }

    // 广告牌
    .ad {
      display: flex;
      justify-content: space-between;
      margin-top: 23rpx;
      image {
        width: 338.46rpx;
        height: 157.69rpx;
      }
    }

    .notice {
      margin-top: 61rpx;
      .notice-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 17rpx;
        position: relative;
        height: 45rpx;
        &::before {
          width: 5.77rpx;
          height: 30.77rpx;
          border-radius: 1.92px;
          opacity: 1;
          background: linear-gradient(180deg, #57a7ffff 0%, #258cebff 100%);
          position: absolute;
          content: "";
          left: 0;
        }
        > text {
          font-size: 30.77rpx;
          font-weight: 500;
          color: #1b243d;
        }

        .more {
          color: #78808f;
          font-size: 23.08rpx;
        }

        .num {
          font-size: 23.08rpx;
          font-weight: 500;
          color: #eb1c38ff;
          margin-left: 7.6rpx;
        }
      }

      .notice-list {
        .notice-list-item {
          position: relative;
          display: flex;
          flex-direction: column;
          border-bottom: 1rpx solid #78808f83;
          justify-content: center;
          height: 128rpx;
          .title {
            font-size: 26.92rpx;
            font-weight: 500;
            color: #1b243dff;
          }
          .bot {
            background-color: #fa5151;
            content: "";
            display: inline-block;
            width: 10rpx;
            height: 10rpx;
            vertical-align: top;
            border-radius: 10rpx;
            margin-right: 10rpx;
          }

          .info {
            font-size: 23.08rpx;
            font-weight: 400;
            color: #78808f;
            margin-top: 10rpx;
          }
          .more {
            position: absolute;
            right: 0;
          }
        }
      }
    }
  }
}

// .bottom-tab-bar {
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 60px;
//   background-color: #fff;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
// }

// .tab-item {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }

// .tab-icon {
//   width: 24px;
//   height: 24px;
// }

// .tab-title {
//   font-size: 12px;
//   margin-top: 4px;
// }
</style>
