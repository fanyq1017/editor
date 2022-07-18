<template>
    <video 
    class="video-js vjs-big-play-centered" 
    id="vid1"
    >
        <!-- 视频资源，修改这个即可 -->
        <source :src="url">
    </video>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'

export default {
  name:'Video',
  mounted(){
    let player = videojs('vid1',{
        controls: true,//显示播放栏
        autoplay: true,//自动播放
        preload:'auto',//预加载
        width:750,//宽度
        playbackRates:[0.5,1,1.25,1.5,2],//速率
    })
  },
  data(){
    return{
        url:require("../../assets/oobe-intro.mp4")
    }
  },
}
</script>

<style>
/* 不要加scoped!! */
/*暂停时显示播放按钮*/
.vjs-paused .vjs-big-play-button,
.vjs-paused.vjs-has-started .vjs-big-play-button {
    display: block;
}
/*播放按钮变圆形 */
.video-js .vjs-big-play-button{
    font-size: 2.5em;
    line-height: 2.3em;
    height: 2.5em;
    width: 2.5em;
    -webkit-border-radius: 2.5em;
    -moz-border-radius: 2.5em;
    border-radius: 2.5em;
    background-color: #73859f;
    background-color: rgba(115,133,159,.5);
    border-width: 0.15em;
    margin-top: -1.25em;
}
.vjs-big-play-button .vjs-icon-placeholder {
    font-size: 1.63em;
}
.vjs-loading-spinner {
    font-size: 2.5em;
    width: 2em;
    height: 2em;
    border-radius: 1em;
    margin-top: -1em;
}
/*进度条显示当前播放时间*/
.video-js .vjs-time-control{display:block;}
.video-js .vjs-remaining-time{display: none;}
</style>