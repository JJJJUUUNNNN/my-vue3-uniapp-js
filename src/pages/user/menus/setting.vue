<template>
  <view class="setting">
    <ListCard :list-data="settingListFirst"></ListCard>
    <ListCard :list-data="settingListTwo"></ListCard>
    <ListCard :list-data="settingListThree"></ListCard>

    <button class="quit-btn">退出账号</button>
  </view>
</template>

<script setup>
import ListCard from '../../../component/card/ListCard.vue'

const settingListFirst=ref([
  {text:'头像',url:'/pages/user/menus/register/personal',rightImg:'/static/head.png'},
  {text:'昵称',url:'/pages/user/menus/register/company',rightInfo:'林职业'},
  {text:'ID',url:'/pages/user/menus/setting',rightInfo:'10086'},
])

const settingListTwo=ref([
  {text:'手机号',url:'/pages/user/menus/register/personal',rightInfo:'182****6666'},
  {text:'微信',url:'/pages/user/menus/register/company',rightInfo:'未绑定'},
])

const settingListThree=ref([
  {text:'系统通知',url:'/pages/user/menus/register/personal',notLink:true,switch:true},
  {text:'检查新版本',url:'/pages/user/menus/register/company'},
  {text:'清除缓存',url:'/pages/user/menus/register/company',rightInfo:'207M'},
])
</script>

<style lang="scss">
page {
  background-color: #f8f9fd;
}

.quit-btn{
  width: 688.46rpx;
  background: #ffffffff;
  margin: 29rpx auto 0;
  color: #eb1c38ff;
 font-size: 26.92rpx;

 &::after{
  border: 0;
 }
}
</style>