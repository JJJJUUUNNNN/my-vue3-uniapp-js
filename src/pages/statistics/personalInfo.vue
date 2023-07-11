<template>
  <view class="personal-info-statistics">
    <FormCard :form-data="formDataFirst"></FormCard>
    <FormCard :form-data="formDataSecond"></FormCard>
    <FormCard :form-data="formDataThird"></FormCard>
    <FormCard :form-data="formDataFour"></FormCard>
    <FormCard :form-data="formDataFive" :label-position="'top'"></FormCard>

    <view class="fixed-button">
      <button class="submit-btn" @click="handleSubmit">提交</button>
    </view>
  </view>
</template>

<script setup>
import FormCard from '@/component/card/FormCard.vue'

const range = [
  { value: 0, text: '选择登记用户信息完善' },
  { value: 1, text: '客户一' },
  { value: 2, text: '客户二' }
]

const selectData = [
  { value: 0, text: '请选择' },
  { value: 1, text: '健康' },
  { value: 2, text: '残疾' },
  { value: 3, text: '患病' }
]

const value = ref(0)

const formDataFirst = ref([
  { label: '集团单位', model: '', type: 'input' },
  { label: '在用终端型号', model: '', type: 'input' },
  { label: '在用终端使用时长', model: '', type: 'input' },
])

const formDataSecond = ref([
  { label: '姓名', model: '', type: 'input' },
  { label: '号码', model: '', type: 'input' },
  { label: '职位', model: '', type: 'input' },
  { label: '性别', model: '', type: 'input' },
  { label: '年龄', model: '', type: 'input' },
  { label: '健康状况', model: '', type: 'select' },
  { label: '爱好', model: '', type: 'textarea' }
])

const formDataThird = ref([
  { label: '人际关系', model: '', type: 'input' },
  { label: '和移动的关系', model: '', type: 'input' },
])

const formDataFour = ref([
  { label: '家宽使用情况', model: '', type: 'input' },
  { label: '家属消费情况', model: '', type: 'input' },
  { label: '家属情况', model: '', type: 'input' },
])

const formDataFive = ref([
  { label: '其他信息备注', model: '', type: 'textarea' },
])

const tableDataOne = ref([
  { text: '工作年限（年/月）', value: '' },
  { text: '公司名称', value: '' },
  { text: '工作内容', value: '' },
])

const tableDataTwo = ref([
  { text: '消费日期', value: '' },
  { text: '消费金额', value: '' },
  { text: '备注', value: '' },
])

function handleSubmit() {
  uni.navigateTo({
    url: '/pages/home/index'
  })
}
</script>

<style lang="scss">
page {
  background-color: #f8f9fd;
}

.personal-info-statistics {
  padding-bottom: 100px;

  .fixed-button {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 107.69rpx;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    box-sizing: border-box;

    .submit-btn {
      width: 668.46rpx;
      height: 76.92rpx;
      background: #1F78FF;
      color: #ffffffff;
      font-size: 30.77rpx;
      font-weight: 500;
      border-radius: 76.92px;

      &::after {
        border: 0;
      }
    }
  }
}
</style>