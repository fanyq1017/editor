<template>
  <input :type="inputType"
         readonly
         :class="classStyle"
         @click="btnClick($event)"
         :disabled="classStyle==='disabled-btn'"
         :value="text">
</template>
<script>
  export default {
    props: {
      text: {
        type: [String, Number],
        default: '一颗小按钮'
      },
      inputType: {
        type: [String],
        default: 'button'
      },
      classStyle: {
        type: String,
        default: 'default-btn'
      }
    },
    methods: {
      btnClick (event) {
        this.$emit('btnClick', event)
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  // 主色
  $main-col: #5079d9;
  // 头部
  $head-bgc: #1a1a1a;
  // 字体颜色
  $cc: #ccc;
  $c6: #666;
  $c9: #999;
  $c3: #333;
  $cf: #fff;

  %style {
    width: 50%;
    height: 20%;
    line-height: 28px;
    vertical-align: middle;
  }

  @mixin color($a,$b,$c) {
    border: 1px solid $a;
    border-radius: 0px;
    font-size: 16px;
    color: $b;
    background-color: $c;
  }

  input {
    display: inline-block;
    cursor: pointer;
    text-align: center;
    /*> span {*/
    /*user-select: none;*/
    /*display: inline-block;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*}*/
  }

  /*灰色的按钮*/
  .gray-btn {
    border: 1px solid #d5d5d5;
    color: #646464;
  }

  // 默认按钮
  .default-btn {
    @include color(orangered, #646464, rgba(245, 245, 245, 0.6));
    @extend %style;
    font-weight: bold;
    color:orangered;
    &:hover {
      background-color: rgba(255, 176, 176, 0.6);
    }
  }

  // 主色按钮
  .main-btn {
    @include color(#5c81e3, #fff, #678ee7);
    background-image: -webkit-linear-gradient(top, #678ee7, #5078df);
    background-image: linear-gradient(180deg, #678ee7, #5078df);
    @extend %style;
    &:hover {
      background-color: #6c8cd4;
      background-image: -webkit-linear-gradient(top, #6c8cd4, #4769c2);
      background-image: linear-gradient(180deg, #6c8cd4, #4769c2);
    }
  }

  // 禁用
  .disabled-btn {
    cursor: not-allowed;
    @include color(#afafaf, $cf, #a9a9a9);
    @extend %style;
    background-image: -webkit-linear-gradient(top, #b8b8b8, #a9a9a9);
    background-image: linear-gradient(180deg, #b8b8b8, #a9a9a9);
  }

</style>
