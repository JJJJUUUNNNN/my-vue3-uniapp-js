<template>
  <view class="form-card">
    <uni-forms ref="baseForm" :modelValue="baseFormData" :label-position="labelPosition">
      <uni-forms-item v-for="(item,index) in formData" :key="index" class="form-item" :label="item.label" label-width="250rpx">
        <uni-easyinput v-model="baseFormData[item.model]" placeholder="请输入" placeholder-style="color: #A5ACB8"/>
      </uni-forms-item>
    </uni-forms>
  </view>
</template>

<script setup>
const props=defineProps({
  formData:{
    type:Array,
    default:()=>[]
  },
  labelPosition:{
    type:String,
    default:'left'
  }
})

const baseFormData=ref({
  company:'',
  name:'',
  phone:''
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
}
</style>