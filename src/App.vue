<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
/*每个页面公共css */
// 设置整个项目的背景色
page {
  background-color: #fff;
}

.uni-forms-item__label{
    color:'#454F66red' !important;
    font-size: 26.92rpx !important;
    font-weight: 500 !important;
  }

  .is-input-border{
    background-color: #F7F9FC !important;
    border: none !important;
  }

  .uni-forms-item {
    margin-bottom: 23.07rpx !important;
  }
</style>
