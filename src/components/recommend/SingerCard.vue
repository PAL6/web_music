<template>
  <div class="singer_card">
    <a href="">
      <img :src="singer.picUrl" alt="">
      <div class="info">
        <h4>{{ singer.name }}</h4>
        <span>单曲 {{ singer.musicSize }}</span>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: "SingerCard",
  props: {
    singer: {
      type: Object,
      default: {
        "img1v1Id": 109951165034950660,
        "topicPerson": 0,
        "albumSize": 21,
        "img1v1Url": "http://p4.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg",
        "picUrl": "http://p3.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg",
        "trans": "",
        "musicSize": 276,
        "briefDesc": "",
        "alias": [],
        "picId": 109951165034938860,
        "followed": false,
        "name": "薛之谦",
        "id": 5781,
        "accountId": 97137413,
        "picId_str": "109951165034938865",
        "img1v1Id_str": "109951165034950656"
      }
    }
  }
}
</script>

<style scoped>
.singer_card a{
  width: 100%;
  display: flex;
  border: 1px solid #cccccc;
}

.singer_card img {
  height: 62px;
  width: 62px;
  flex: 2;
}

.singer_card .info {
  padding-left: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 62px;
  flex: 4;
}

.info h4 {
  color: #242424;
  margin-bottom: 10px;
  font-size: 14px;
}

.info span {
  font-size: 12px;
  color: #8c8c8c;
}
</style>