<template>
    <div class="good-item">
        <div>
            <a class="good-img">
                <!-- <img v-lazy="msg.activityImg" :alt="msg.activityName" :key="msg.activityImg" /> -->
                <img src="../../assets/a.jpeg" />
            </a>
        </div>
        <h6 class="good-title" v-html="msg.title"></h6>
        <h3 class="sub-title ellipsis">{{msg.activityInfo}}</h3>
        <div class="ds pa">
            <y-button text="查看详情" style="margin: 0 5px; margin-top: 10%;"></y-button>
        </div>
    </div>
</template>

<script>
    import YButton from './YButton.vue'

    export default {
        props:{
            msg:{

            }
        },
        components: {
          YButton
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@mixin wh($w,$h:$w) {
  width: $w;
  height: $h;
}

%block-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.good-item {
    background: rgba(248, 248, 248, 0.5);
    width: 25%;
    transition: all .5s;
    height: 430px;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 1px 1px 20px #999;
      .good-price p {
        display: none;
      }
      .ds {
        display: flex;
      }
    }
    .ds {
      @extend %block-center;
      width: 100%;
      display: none;
    }

    .good-img {
      img {
        margin: 1% auto 16px;
        @include wh(99%);
        display: block;
      }
    }
    .good-price {
      margin: 15px 0;
      height: 30px;
      text-align: center;
      line-height: 30px;
      color: #d44d44;
      font-family: Arial;
      font-size: 18px;
      font-weight: 700;
    }
    .good-title {
      line-height: 1.2;
      font-size: 16px;
      color: #424242;
      margin: 0 auto;
      padding: 0 14px;
      text-align: center;
      overflow: hidden;
    }
    h3 {
      text-align: center;
      line-height: 1.2;
      font-size: 12px;
      color: #d0d0d0;
      padding: 10px;
    }

  }
</style>