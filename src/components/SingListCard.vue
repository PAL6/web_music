<template>
  <div class="music_card">
    <div class="pic">
      <img :src="musicInfo.coverImgUrl" alt="">
      <div class="info">
        <van-icon name="audio" class="audio_icon"/>
        <span>{{ musicInfo.playCount|numberToString }}</span>
        <van-icon name="play-circle" class="play" @click="play"/>
      </div>
    </div>
    <a href="#" :title="musicInfo.name">
      <span>{{ musicInfo.name }}</span>
    </a>
    <span class="tip">by<span class="author">{{musicInfo.creator.nickname}}</span></span>
  </div>
</template>

<script>
export default {
  name: "SingListCard",
  props: {
    musicInfo: {
      type: Object,
      default: {}
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
  methods:{
    play(){
      this.$emit('play');
    }
  }
}
</script>

<style scoped>
.music_card {
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
.music_card a span{
  display: block;
  width: 155px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.tip{
  font-size: 12px;
  color: #999;
}
.author{
  margin-left: 10px;
  font-size: 12px;
  color: #666;
}
</style>