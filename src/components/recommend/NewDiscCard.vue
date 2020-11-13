<template>
  <div class="disc_card" @click="send(disc)">
    <img :src="disc.picUrl" alt="">
    <h6 class="disc_name">{{ disc.name }}</h6>
    <h6 class="singer">{{ disc.artist.name }}</h6>
  </div>
</template>

<script>
export default {
  name: "NewDiscCard",
  props: {
    disc: {
      type: Object,
      default: {
        'picUrl': 'http://p4.music.126.net/9mfyDkw0kaKL1FYYJIS3Sw==/109951165431016816.jpg',
        'name': '歌名',
        'artist': {
          'name': '歌手'
        }
      }
    }
  },
  methods:{
    send(item){
      //发射点击事件
      this.$emit('tag',item)
    }
  }
}
</script>

<style scoped>
.disc_card {
  cursor: pointer;
  margin: 10px;
  width: 100px;
}

.disc_card img {
  height: 100px;
  width: 100px;
}

.disc_name {
  font-size: 16px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.singer {
  font-size: 14px;
  color: #8c8c8c;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

</style>