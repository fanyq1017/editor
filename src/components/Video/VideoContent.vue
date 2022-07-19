<template>
  <div id="VideoContent">
    <div class="VMenuWarp item" style="padding-left: 10px">
      <VideoNavMenu class="VMenu"></VideoNavMenu>
    </div>
    <div class="VideoWarp item">
      <Video class="Video"></Video>
    </div>
  </div>
</template>

<script>
import VideoNavMenu from "./VideoNavMenu.vue";
import Video from "./Video.vue";

export default {
    components: {
      VideoNavMenu,
      Video
    }
}
</script>

<style>
#VideoContent{
  display: flex;
  margin-top: 100px;
}
.item{
  justify-content: flex-start;
  box-sizing: border-box;
  border: 1px solid rgba(221, 7, 7, 0.37);
  margin:5px;
  background-color: rgba(141, 138, 138, 0.063);
}
.VMenuWarp{
  margin: 5px;
}
.VMenu{
  min-width: 205px;
  margin: 10px;
}
.VideoWarp{
  margin-left: 200px;
}
.Video{
  margin-left:100px;
  margin-top: 50px;
  margin-bottom:100px;
  margin-right: 100px;
}
</style>
