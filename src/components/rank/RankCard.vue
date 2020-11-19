<template>
  <div class="item" @click="tag">
    <img :src="coverImgUrl" alt="!!"/>
    <div class="base_info">
      <h3>{{ title }}</h3>
      <span>{{ des }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankCard",
  props: {
    title: {
      type: String,
      default: "云音乐飙升榜",
    },
    des: {
      type: String,
      default: "每天更新",
    },
    coverImgUrl: {
      type: String,
      default:
          "http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg",
    },
  },
  methods: {
    tag() {
      this.$emit('handle');
    }
  }
}
</script>

<style scoped>
h3,
span {
  margin: 0;
  padding: 0;
  font-size: 12px;
}

.item {
  /*background-color: #e6e6e6;*/
  display: flex;
  width: 210px;
  padding: 15px 0 10px 30px;
}

.item img {
  width: 40px;
  height: 40px;
}

.base_info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  text-align: left;
  width: 170px;
  font-size: 12px;
}
</style>