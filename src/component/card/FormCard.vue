<template>
  <view class="form-card">
    <uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
      <uni-forms-item class="form-item" label="姓名">
        <uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
      </uni-forms-item>
      <uni-forms-item class="form-item" label="年龄">
        <uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
      </uni-forms-item>
      <uni-forms-item class="form-item" label="年龄">
        <uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
      </uni-forms-item>
    </uni-forms>
  </view>
</template>

<script setup>

const baseFormData=ref({
  name:'',
  age:'',
})
</script>

<style lang="scss">
.form-card {
  width: 688.46rpx;
  margin: 29rpx auto 0;
  background: #ffffffff;
  padding: 23.08rpx;
  box-sizing: border-box;
  border-radius: 15.38rpx;

  // :deep(.uni-forms){
  //   background-color: red;
  // }
}
</style>