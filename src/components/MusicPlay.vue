<template>
  <div class="audio_box">
    <div class="musicName">
      {{ musicName }}
    </div>
    <div class="play_box">
      <div class="music_list"  v-show="isShowMenu">
        <van-icon name="cross" class="close" @click="isShowMenu = false"/>
        <div class="list">
          <ul>
            <li v-for="item in infoList">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <img :src="musicPicUrl" alt="" class="avatar">
      <van-icon name="arrow-left" class="preMusic" @click="pre"/>
      <van-icon name="arrow" class="nextMusic" @click="next"/>
      <audio
          :src="playList[$store.state.index]"
          class="audio"
          controls
          autoplay
          :loop="isLoop"
          @ended="end"></audio>
      <van-icon name="column" class="musicMenu" @click="toggleMenu"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "AudioPlay",
  props: {
    musicPicUrl: {
      type: String,
      default: 'http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg'
    },
    musicName: {
      type: String,
      default: '歌名'
    },
    playList:{
      type:Array,
      default:[]
    },
    infoList:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      isLoop: true,
      isShowMenu:false
    }
  },
  methods: {
    end() {
     this.$store.commit('next');
    },
    toggleMenu(){
      this.isShowMenu =! this.isShowMenu;
    },
    //下一首
    next(){
      this.$store.commit('next');
      this.$store.commit('musicName');
    },
    //上一首
    pre(){
      this.$store.commit('pre');
      this.$store.commit('musicName');
    }
  },

}
</script>

<style scoped>
.audio_box {
  position: relative;
  width: 100%;
  height: 80px;
  min-width: 1220px;
  margin: 0 auto;
  background-color: #42b983;
}

.play_box {
  position: relative;
  display: flex;
  justify-items: center;
  align-items: center;
  height: 50px;
  width: 1220px;
  min-width: 1220px;
  margin: 0 auto;
  background-color: rgb(241, 243, 244);
}

.nextMusic {
  margin: 0 10px;
  font-size: 20px;
  cursor: pointer;
}

.preMusic {
  cursor: pointer;
  margin: 0 10px;
  font-size: 20px;
}

.avatar {
  height: 50px;
  width: 50px;
}

.audio {
  display: inline-block;
  -moz-border-radius: 0;
  border-radius: 0;
  height: 50px;
  width: 900px;
  background-color: rgb(241, 243, 244);
}

.musicName {
  height: 30px;
  width: 1070px;
  padding-left: 150px;
  background-color: aqua;
  min-width: 1070px;
  margin: 0 auto;
  text-align: left;
  color: purple;
  line-height: 30px;
}

.musicMenu {
  margin-left: 20px;
  font-size: 20px;
}

.music_list {
  padding-left: 20px;
  text-align: left;
  bottom: 50px;
  right: 0;
  height: 300px;
  width: 180px;
  background-color: salmon;
  position: absolute;
  /*overflow: scroll;*/
}
.list{
  margin-top: 50px;
  height: 250px;
  overflow-y: scroll;
}
.music_list ul li{
  line-height: 30px;
  height: 30px;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
}
.close{
  position: absolute;
  right: 10px;
  margin: 10px;
  font-size: 20px;
  text-align: right;
}
</style>