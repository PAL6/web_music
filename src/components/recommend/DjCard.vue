<template>
  <div class="dj_card">
    <a href="">
      <img :src="dj.picUrl" alt="">
      <div class="dj_info">
        <h4>{{ dj.creatorName }}</h4>
        <span>{{ dj.rcmdtext }}</span>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: "DjCard",
  props: {
    dj: {
      type: Object,
      default: {
        "id": 792868378,
        "name": "一条小团团OvO的翻唱合集",
        "picUrl": "https://p2.music.126.net/iRkVEquf5YAkzIILGyM_lg==/109951163905919405.jpg",
        "programCount": 39,
        "subCount": 560523,
        "createTime": 1551785967125,
        "categoryId": 2001,
        "category": "创作翻唱",
        "rcmdtext": "可神经可温柔的宝藏女声",
        "radioFeeType": 0,
        "feeScope": 0,
        "playCount": 176295904,
        "lastRank": 3,
        "score": 116563,
        "dj": {
          "defaultAvatar": false,
          "province": 430000,
          "authStatus": 1,
          "followed": false,
          "avatarUrl": "http://p1.music.126.net/3sp2lepK3wk2fdQ1epQRxA==/109951163653864778.jpg",
          "accountStatus": 0,
          "gender": 2,
          "city": 430600,
          "birthday": 816105600000,
          "userId": 454519979,
          "userType": 10,
          "nickname": "一条小团团OvO",
          "signature": "一条小团团OvO 日常翻唱",
          "description": "斗鱼TV主播",
          "detailDescription": "斗鱼TV主播",
          "avatarImgId": 109951163653864780,
          "backgroundImgId": 109951163922793010,
          "backgroundUrl": "http://p1.music.126.net/gSP92Qmzjy2Wb-sSWKRQyw==/109951163922793015.jpg",
          "authority": 0,
          "mutual": false,
          "expertTags": null,
          "experts": null,
          "djStatus": 10,
          "vipType": 11,
          "remarkName": null,
          "authenticationTypes": 2056,
          "avatarDetail": null,
          "anchor": false,
          "avatarImgIdStr": "109951163653864778",
          "backgroundImgIdStr": "109951163922793015",
          "avatarImgId_str": "109951163653864778"
        },
        "creatorName": "一条小团团OvO",
        "rank": 2
      }
    }
  }
}
</script>

<style scoped>
.dj_card a{
  width: 100%;
  display: flex;
  border: 1px solid #cccccc;
}

.dj_card img {
  height: 62px;
  width: 62px;
}

.dj_card .dj_info {
  padding-left: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 62px;
}

.dj_info h4 {
  color: #242424;
  margin-bottom: 10px;
  font-size: 14px;
}

.dj_info span {
  width: 120px;
  font-size: 12px;
  color: #8c8c8c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>