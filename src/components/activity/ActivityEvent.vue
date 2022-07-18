<template>
    <div class="good-item">
        <div style="width: 100%; height: 50%; border:none;">
            <a class="good-img">
                <!-- <img v-lazy="msg.activityImg" :alt="msg.activityName" :key="msg.activityImg" /> -->
                <img :src="msg.pimage" />
            </a>
        </div>
        <h4 class="good-title" v-html="msg.pname"></h4>
        <div class="ds pa">
            <y-button @btnClick="handleClick" text="查看详情" style="margin: 0 5px; margin-top: 20%;"></y-button>
        </div>
    </div>
</template>

<script>
    import YButton from './YButton.vue'

    export default {
        props:{
            msg:{

            },
            info_state:
            {
                active:false,
                info:{}
            },
        },
        components: {
          YButton
        },
        methods:
        {
          handleClick()
          {
            console.log("handleClick");
            this.info_state.active = true;
            this.info_state.info = this.msg;
            console.log('info_state in child: ' + this.info_state.info.pname + ' ' + this.info_state.active);
          }
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
    background: rgba(255, 247, 244, 0.7);
    width: 25%;
    transition: all .5s;
    height: 430px;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 1px 1px 20px #999;
      background-color: rgba(255, 69, 0, 0.3);
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
      margin-top: 30px;
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