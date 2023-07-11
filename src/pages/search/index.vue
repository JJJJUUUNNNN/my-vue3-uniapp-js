<template>
  <view class="search">
    <view class="nav-box">
      <view v-for="(item, index) in items" :key="index" @click="toggleNav(item.id)"
        :class="current === item.id ? 'nav-item-active' : 'nav-item'">{{ item.title }}</view>
    </view>

    <view class="content">
      <view v-if="current === 0">
        <FormCard></FormCard>
      </view>
      <view v-if="current === 1">
        2
      </view>
    </view>
  </view>
</template>

<script setup>
import FormCard from '@/component/card/FormCard.vue';

const items = ref([
  {
    title: '个人信息登记查询',
    id: 0
  },
  {
    title: '集团信息登记查询',
    id: 1
  }
])

const current=ref(0)

function toggleNav(e) {
  current.value = e
}
</script>

<style lang="scss">
page {
  background-color: #f8f9fd;
}

.nav-box {
  width: 546.15rpx;
  background-color: #EBEFF5;
  height: 84.62rpx;
  margin: 0.75rem auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0.25rem;
  box-sizing: border-box;
  border-radius: 76.92rpx;

  .nav-item-active {
    flex: 1;
    background-color: #fff;
    margin: 0.25rem;
    box-sizing: border-box;
    text-align: center;
    border-radius: 0.25rem;
    height: 2.25rem;
    line-height: 2.25rem;
    border-radius: 76.92px;
    color: #000000ff;
    font-size: 26.92rpx;
  }

  .nav-item {
    flex: 1;
    margin: 0.25rem;
    box-sizing: border-box;
    text-align: center;
    border-radius: 0.25rem;
    height: 2.25rem;
    line-height: 2.25rem;
    color: #000000ff;
    font-size: 26.92rpx;
  }
}
</style>