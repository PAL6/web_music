<template>
  <div class="music_card">
    <div class="pic">
      <img :src="musicInfo.picUrl" alt="">
      <div class="info">
        <van-icon name="audio" class="audio_icon"/>
        <span>{{ musicInfo.playCount|numberToString }}</span>
        <van-icon name="play-circle" class="play"/>
      </div>
    </div>
    <a href="#" :title="musicInfo.name">
      <span>{{ musicInfo.name }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "MusicCard",
  props: {
    musicInfo: {
      type: Object,
      default: {
        'playCount': 1000000,
        'picUrl': 'https://p2.music.126.net/M_RLCjS-BY-zIquqig4DIg==/109951164893281259.jpg',
        'name': '欧美小众丨解锁轻盈雾感格调深邃女声',
      }
    }
  },
  filters: {
    numberToString(num) {
      let numStr = num.toString();
      if (numStr.length < 5) {
        return num;
      } else {
        let target = parseInt(num / 10000) + '万'
        return target;
      }
    }
  },
}
</script>

<style scoped>
.music_card {
  margin-right: 20px;
  margin-bottom: 20px;
  text-align: left;
  width: 155px;
}

.music_card a {
  text-decoration: none;
  color: black;
  font-size: 14px;
}

.pic {
  position: relative;
}

.pic .info {
  color: white;
  font-size: 12px;
  padding: 0 5px;
  position: absolute;
  bottom: 3px;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.7;
  height: 30px;
  line-height: 30px;
  width: calc(100% - 10px);
  display: flex;
  align-items: center;
  align-content: space-between;
}

.audio_icon{
  margin-right: 5px;
  font-size: 14px;
}

.play{
  position: absolute;
  right: 5px;
  font-size: 16px;
}

.play:hover{
  cursor: pointer;
  color: purple;
}

.pic img {
  width: 100%;
  height: 140px;
}
</style>