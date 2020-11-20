<template>
  <div class="header">
    <img :src="url" alt="!!">
    <div class="info">
      <h3>{{ title }}</h3>
       <span><i class="el-icon-s-help time"></i>最近更新: {{ updateTime|DateFormatMethod }}   ( {{ updateText }} )</span>
      <div class="btn_box"></div>
      <el-row>
        <el-button type="primary" :plain="true" icon="el-icon-caret-right" @click="playRank">播放</el-button>
        <el-button type="info"  :plain="true" icon="el-icon-folder-add">{{ '( '+ addTime +' )' }}</el-button>
        <el-button type="info" :plain="true" icon="el-icon-share">{{ '( '+ shareTime +' )' }}</el-button>
        <el-button type="info" :plain="true" icon="el-icon-bottom">下载</el-button>
        <el-button type="info" :plain="true" icon="el-icon-chat-dot-square">{{ '( '+ msgTime +' )' }}</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankHeader",
  props: {
    url:{
      type:String,
      default:'http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg'
    },
    title: {
      type: String,
      default: '标题'
    },
    updateTime: {
      type: Number,
      default: 481205420
    },
    updateText: {
      type: String,
      default: '每日更新'
    },
    addTime:{
      type:Number,
      default:151210
    },
    shareTime:{
      type:Number,
      default:4900
    },
    msgTime:{
      type:Number,
      default:58120
    }
  },
  filters: {
    DateFormatMethod(time) {
      let date = new Date(parseInt(time));
      let m = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
      let d = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
      return m + '月' + d + '日'
    }
  },
  methods:{
    playRank(){
      this.$emit('playRank');
    }
  }
}
</script>

<style scoped>
h3, span {
  padding: 0;
  margin: 0;
}
h3{
  margin-bottom: 10px;
}
span{
  font-size: 13px;
}
.header {
  display: flex;
  width: 100%;
  height: 150px;
  background-color: white;
  padding: 30px 0;
}

.header img {
  height: 146px;
  width: 146px;
  padding: 2px;
  border: 1px solid #8c8c8c;
}
.info{
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
.btn_box{
  width: 688px;
  margin-bottom: 30px;
}
.time{
  font-size: 15px;
  margin-right: 8px;
  display: inline-block;
}
</style>