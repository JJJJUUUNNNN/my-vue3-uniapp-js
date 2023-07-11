<template>
  <view class="personal-detail">
    <ListCard :list-data="listDataFirst"></ListCard>
    <ListCard :list-data="listDataSecond" title="集团移动产品使用情况"></ListCard>
    <ListCard :list-data="listDataThird" title="集团竞争对手产品使用情况"></ListCard>
  </view>
</template>

<script setup>
import ListCard from '@/component/card/ListCard.vue';

const listDataFirst=ref([
  {text:'姓名：',content:'王瑶'},
  {text:'联系电话：',content:'131 1234 1234'},
  {text:'集团名称：',content:'铁通集团'},
])

const listDataSecond=ref([
  {text:'宽带：',content:'数据内容'},
  {text:'公司名称：',content:'数据内容'},
  {text:'工作内容：',content:'数据内容'},
  {text:'到期日期：',content:'数据内容'},

  {text:'宽带：',content:'数据内容'},
  {text:'公司名称：',content:'数据内容'},
  {text:'工作内容：',content:'数据内容'},
  {text:'到期日期：',content:'数据内容'},
])

const listDataThird=ref([
  {text:'宽带：',content:'数据内容'},
  {text:'公司名称：',content:'数据内容'},
  {text:'工作内容：',content:'数据内容'},
  {text:'到期日期：',content:'数据内容'},

  {text:'宽带：',content:'数据内容'},
  {text:'公司名称：',content:'数据内容'},
  {text:'工作内容：',content:'数据内容'},
  {text:'到期日期：',content:'数据内容'},
])
</script>

<style lang="scss">
page {
  background-color: #f8f9fd;
  padding-bottom: 200rpx;
}

</style>