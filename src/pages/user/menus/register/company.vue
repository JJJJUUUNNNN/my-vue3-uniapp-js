<template>
  <view class="personal-register">
    <ListCard :list-data="personalRegisterList"></ListCard>
    <ListCard :list-data="personalRegisterList"></ListCard>
  </view>
</template>

<script setup>
import ListCard from '../../../../component/card/ListCard.vue';

const personalRegisterList=ref([
  {text:'登记时间：2023-08-24'},
  {text:'姓名：林置业'},
  {text:'集团名称：铁通公司'},
])
</script>

<style lang="scss">
page {
  background-color: #f8f9fd;
}
</style>