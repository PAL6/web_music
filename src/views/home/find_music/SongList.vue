<template>
  <div class="song_list">
    <Title :show-more="false" :title="title"></Title>
    <div class="content">
      <div v-for="(item,index) in songSheet" :key="item.id" class="card">
        <SingListCard @play="playRank" :music-info="item"></SingListCard>
      </div>
    </div>
    <div class="page_num">
      <el-pagination
          @current-change="handle"
          layout="prev, pager, next, jumper"
          :page-count="this.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {getMethod} from "@/api/http";
import Title from "@/components/recommend/Title";
import SingListCard from "@/components/SingListCard";

export default {
  name: "SongList",
  components: {Title, SingListCard},
  data() {
    return {
      title: '全部',
      //歌单数组
      songSheet: [],
      //获取页码数
      offset: 0,
      //歌单总数
      total:0
    }
  },
  methods: {
    playRank() {
      console.log('播放')
    },
    getSingSheet() {
      getMethod('/top/playlist', {
        'limit': 35,
        'offset': this.offset*35
      }).then(res => {
        this.songSheet = res.data.playlists;
        this.total = Math.ceil(res.data.total / 35);
        console.log(this.total)
      }).catch(err => {
        console.log(err);
      })
    },
    handle(val){
      console.log(val-1);
      this.offset = val-1;
      this.getSingSheet();
    }
  },
  mounted() {
    this.getSingSheet();
  }
}
</script>

<style scoped>
.song_list {
  width: 945px;
  min-width: 945px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #8c8c8c;
  border-bottom: 0;
  border-top: 0;
}

.content {
  padding-top: 30px;
  width: 945px;
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin-right: 42.5px;
}

.card:nth-child(5n) {
  margin-right: 0;
}
.page_num{
  width: 500px;
  margin: 20px auto 0 auto;
}
</style>