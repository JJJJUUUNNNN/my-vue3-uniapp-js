<template>
  <view>
      <uni-data-select
        v-model="value"
        :localdata="range"
        @change="change"
        :clear="false"
      ></uni-data-select>
      <view class="form">
        <view class="form-item" v-for="(item,index) in formData" :key="index">
          <view class="item-content-input" v-if="item.type==='input'">
            <text>{{ item.title }}</text>
            <input class="uni-input" placeholder="请输入" placeholder-class="placeholder" v-model="item.model" />
          </view>
          <view class="item-content-textarea" v-if="item.type==='textarea'">
            <text>{{ item.title }}</text>
            <textarea placeholder="请输入" placeholder-class="placeholder" />
          </view>
          <view class="item-content-table" v-if="item.type==='table'">
            <text>{{ item.title }}</text>
            <uni-table border stripe emptyText="暂无更多数据" >
              <uni-tr>
                <uni-th width="140"></uni-th>
                <uni-th></uni-th>
              </uni-tr>
              <uni-tr v-for="(item,index) in tableData" :key="index">
                <uni-td>{{ item.text }}</uni-td>
                <uni-td>{{ item.value }}</uni-td>
              </uni-tr>
            </uni-table>
          </view>
          <view class="item-content-select" v-if="item.type==='select'">
            <text>{{ item.title }}</text>
            <uni-data-select
              v-model="value"
              :localdata="selectData"
              @change="change"
              :clear="false"
            ></uni-data-select>
          </view>
        </view>
        <button class="submit-btn" @click="handleSubmit">提交</button>
      </view>
  </view>
</template>

<script setup>
const range=[
  {value:0,text:'选择登记用户信息完善'},
  {value:1,text:'客户一'},
  {value:2,text:'客户二'}
]

const selectData=[
  {value:0,text:'请选择'},
  {value:1,text:'健康'},
  {value:2,text:'残疾'},
  {value:3,text:'患病'}
]

const value=ref(0)

const formData=ref([
  {title:'集团单位',model:'',type:'input'},
  {title:'姓名',model:'',type:'input'},
  {title:'号码',model:'',type:'input'},
  {title:'在用终端型号',model:'',type:'input'},
  {title:'在用终端使用时长',model:'',type:'input'},
  {title:'职位',model:'',type:'input'},
  {title:'性别',model:'',type:'input'},
  {title:'年龄',model:'',type:'input'},
  {title:'爱好',model:'',type:'textarea'},
  {title:'健康状况',model:'',type:'select'},
  {title:'工作履历',model:'',type:'table'},
  {title:'人际关系',model:'',type:'input'},
  {title:'跟移动的关系',model:'',type:'input'},
  {title:'近3个月消费',model:'',type:'table'},
  {title:'家宽使用情况',model:'',type:'input'},
  {title:'家属消费情况',model:'',type:'input'},
  {title:'家属情况',model:'',type:'input'},
  {title:'其他信息备注',model:'',type:'textarea'},
])

const tableData=ref([
  {text:'工作年限（年/月）',value:''},
  {text:'公司名称',value:''},
  {text:'工作内容',value:''},

])

function change(e){
  console.log(e)
}

function handleSubmit(){
  uni.navigateTo({
    url:'/pages/home/index'
  })
}
</script>

<style lang="scss">
page{
  padding: 0.9375rem;
  box-sizing: border-box;
}
.form{
  .form-item{
    .item-content-input{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #aaa;
      padding: 0.625rem 0;

      .placeholder{
        color:#999999;
        text-align: right;
      }
    }

    .item-content-textarea{
      padding: 0.625rem 0;
      border-bottom: 1px solid #aaa;

      .placeholder{
        color:#999999;
        text-align: right;
      }
    }

     .item-content-select{
      display: flex;
      justify-content: space-between;
      padding: 0.625rem 0;
      border-bottom: 1px solid #aaa;
    }

    .item-content-table{
      padding: 0.625rem 0;
      
      :deep(.uni-table){
        border: 1px solid #000; 

         .uni-table-th,
          .uni-table-td{
              border-bottom: 1px solid #000;
              border-right: 1px solid #000;
          }
      }
    }
  }

  .submit-btn{
    margin-top: 20px;
    color: #1890FF;
  }
}
</style>