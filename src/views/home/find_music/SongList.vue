<template>
  <div class="song_list">
    <h2>歌单</h2>
    <button @click="play">按钮</button>
  </div>
</template>

<script>
import {playMusic} from '@/api/playMusic'

export default {
  name: "SongList",
  methods: {
    play() {
      playMusic()
    }
  }
}
</script>

<style scoped>

</style>