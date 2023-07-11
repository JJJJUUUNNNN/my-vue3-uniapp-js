<template>
  <view class="personal-detail">
    <ListCard :list-data="listDataFirst"></ListCard>
    <ListCard :list-data="listDataSecond"></ListCard>
    <ListCard :list-data="listDataThird"></ListCard>
    <ListCard :list-data="listDataFour" title="工作履历"></ListCard>
  </view>
</template>

<script setup>
import ListCard from '@/component/card/ListCard.vue';

const listDataFirst=ref([
  {text:'姓名：',content:'王瑶'},
  {text:'性别：',content:'男'},
  {text:'年龄：',content:'24'},
  {text:'监控状况：',content:'健康'},
  {text:'民族：',content:'汉族'},
  {text:'身份证号：',content:'健康'},
  {text:'集团名称：',content:'铁通集团'},
])

const listDataSecond=ref([
  {text:'在用终端型号：',content:'数据内容'},
  {text:'在用终端使用时长：',content:'数据内容'},
  {text:'人际关系：',content:'数据内容'},
  {text:'和移动的关系：',content:'数据内容'},
  {text:'爱好：',content:'数据内容'},
])

const listDataThird=ref([
  {text:'家宽带使用情况：',content:'数据内容'},
  {text:'家属消费情况：',content:'数据内容'},
  {text:'家属情况：',content:'数据内容'},
])

const listDataFour=ref([
  {text:'工作年限：',content:'数据内容'},
  {text:'公司名称：',content:'数据内容'},
  {text:'工作内容：',content:'数据内容'},
])
</script>

<style lang="scss">
page {
  background-color: #f8f9fd;
  padding-bottom: 200rpx;
}

</style>