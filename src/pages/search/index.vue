<template>
  <view class="search">
    <view class="nav-box">
      <view v-for="(item, index) in items" :key="index" @click="toggleNav(item.id)"
        :class="current === item.id ? 'nav-item-active' : 'nav-item'">{{ item.title }}</view>
    </view>

    <view class="content">
      <view v-if="current === 0">
        <FormCard :form-data="formData"></FormCard>
      </view>
      <view v-if="current === 1">
        <FormCard :form-data="formData"></FormCard>
      </view>
    </view>

    <button class="search-btn" @click="hanleSearch">查询</button>
  </view>

  <CustomTabbar></CustomTabbar>
</template>

<script setup>
import FormCard from '@/component/card/FormCard.vue';
import CustomTabbar from '@/component/CustomTabbar.vue';

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

const formData=ref([
  {label:'集团单位',model:'company'},
  {label:'姓名',model:'name'},
  {label:'电话号码',model:'phone'}
])

function toggleNav(e) {
  current.value = e
}

function hanleSearch(){
  if(current.value===0){
    uni.navigateTo({
      url:'/pages/search/detail/personal'
    })
  }else if(current.value===1){
    uni.navigateTo({
      url:'/pages/search/detail/company'
    })
  }
}
</script>

<style lang="scss">
page {
  background-color: #f8f9fd;
}

.nav-box {
  width: 546.15rpx;
  background-color: #EBEFF5;
  margin: 0.75rem auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0.25rem;
  box-sizing: border-box;
  border-radius: 76.92rpx;
  box-sizing: border-box;

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

.search-btn{
  width: 596.15rpx;
  height: 76.92rpx;
  background: #1F78FF;
  margin: 68.23rpx auto 0;
  color: #ffffffff;
  font-size: 30.77rpx;
  font-weight: 500;

  &::after{
    border: 0;
  }
}
</style>