<template>
  <div class="rank_box">
    <div class="left_rank">
      <RankCard v-for="(item,index) in menu"
                :title="item.name"
                :cover-img-url="item.coverImgUrl"
                :des="item.updateFrequency"
                :class="isSelect===menu[index].id?'active':''"
                @handle="toggleMenu(index)"></RankCard>
    </div>
    <div class="right_box">
      <RankHeader
          :url="menu[index].coverImgUrl"
          :title="menu[index].name"
          :update-text="menu[index].updateFrequency"
          :update-time="menu[index].updateTime"
          @playRank="playRank"></RankHeader>
      <div class="title">
        <div>
          <h3>歌曲列表</h3>
          <span class="musicCount">{{rankMusic.length}}首歌</span>
        </div>
        <span class="playTime">播放：<span class="count">{{ menu[index].playCount }}</span> 次</span>
      </div>
      <div class="musicList">
        <ul>
          <li v-for="(item,index) in rankMusic" :key="item.id">
            {{ index + 1 }}
            <i class="el-icon-video-play playBtn" @click="playTarget(index)"></i>
            <span class="musicName">{{ item.name }}</span>
            <span class="singer">{{ item.ar[0].name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import RankHeader from "@/components/rank/RankHeader";
import RankCard from "@/components/rank/RankCard";
import {getMethod} from "@/api/http";
import {playMusic,playTargetMusic} from "@/api/playMusic";

export default {
  name: "Rank",
  components: {
    RankCard,
    RankHeader
  },
  data() {
    return {
      menu: [],
      index: 0,
      isSelect: 10,
      rankMusic: []
    }
  },
  mounted() {
    this.getRank();
  },
  methods: {
    //获取榜单
    getRank() {
      getMethod('/toplist/detail').then(res => {
        console.log(res.data.list)
        this.menu = res.data.list;
        this.isSelect = this.menu[0].id;
        this.getRankMusic();
      }).catch(err => {
        console.log(err);
      })
    },
    //获取榜单歌曲
    getRankMusic() {
      let index = this.index
      console.log(index)
      console.log('id====>>>>>' + this.menu[index].id)
      getMethod('/playlist/detail', {
        'id': this.menu[index].id
      }).then(res => {
        console.log(res.data.playlist.tracks);
        this.rankMusic = res.data.playlist.tracks;
      }).catch(err => {
        console.log(err)
      })
    },
    //切换榜单
    toggleMenu(index) {
      this.index = index;
      this.isSelect = this.menu[index].id;
      this.getRankMusic();
      this.toTop();
    },
    //播放榜单
    playRank(){
      playMusic(this.rankMusic)
    },
    //返回顶部
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    playTarget(index){
      console.log(this.rankMusic[index].id);
      console.log(this.$store.state.playList[index])
      console.log(this.$store.state.index)
      playTargetMusic(index);
    }
  },
}
</script>

<style scoped>
.rank_box {
  display: flex;
  width: 1218px;
  min-width: 1218px;
  border: 1px solid #8c8c8c;
  border-bottom: 0;
  margin: 0 auto;
}

.left_rank {
  width: 240px;
  border-right: 1px solid #8c8c8c;
}

.right_box {
  background-color: white;
  width: 918px;
  margin: 0;
  padding: 0 30px;
}

.active {
  background-color: #e6e6e6;
}

.singer {
  margin-left: 90px;
  float: right;
}
.musicName{
  margin-left: 8px;
}
.musicList ul li {
  padding:0 20px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
.musicList ul li:nth-child(2n){
  background-color: #e6e6e6;
}
.playBtn{
  font-size: 17px;
  margin-left: 20px;
}
.playBtn:hover{
  cursor: pointer;
  color: purple;
  font-weight: bold;
}
.title{
  border-bottom: 2px solid #c20c0c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}
.title h3{
  margin-right: 20px;
  display: inline-block;
}
.musicCount{
  font-size: 13px;
  color: #8c8c8c;
}
.playTime{
  font-size: 13px;
  color: #8c8c8c;
}
.count{
  color: #c20c0c;
  font-weight: bold;
}
</style>