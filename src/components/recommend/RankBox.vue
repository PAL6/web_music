<template>
  <div class="rank_type">
    <dl>
      <dt class="dt">
        <div class="dt_header">
          <div>
            <img :src="picUrl" class="rank_logo" alt="!!" />
          </div>
          <div class="rank_info">
            <h6>{{ title }}</h6>
            <van-icon name="play-circle-o" class="play_rank" />
            <van-icon name="add-o" class="add" />
          </div>
        </div>
      </dt>
      <div class="hot_ten">
        <ul>
          <li
            v-for="(item, index) in hotTen"
            :key="item.name"
            @mouseover="btnShow(item.id)"
            @mouseout="hideBtn"
          >
            <div class="allBox">
              <div class="songName">
                <span :class="index<3?'top':''" class="index">{{ index + 1 + "  " }}</span> <a href="#">{{ item.name }}</a>
              </div>
              <div class="btnBox" v-show="item.id === isShowBtn">
                <van-icon name="play-circle-o" class="btn" />
                <van-icon name="add-o" class="btn" />
                <van-icon name="hot-o" class="btn" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="more">
        <a href="#">查看更多></a>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name: "RankBox",
  data() {
    return {
      isShowBtn: 0,
    };
  },
  props: {
    title: {
      type: String,
      default: "热门推荐",
    },
    picUrl: {
      type: String,
      default:
        "http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100",
    },
    hotTen: {
      type: Array,
      default() {
        return [
          {
            name: "云与海",
            id: "1",
          },
          {
            name: "天外来吻",
            id: "10",
          },
          {
            name: "在哪里都很好",
            id: "180",
          },
          {
            name: "启",
            id: "182",
          },
          {
            name: "送一朵愧疚的花",
            id: "122",
          },
          {
            name: "再说句晚安",
            id: "162",
          },
          {
            name: "什么跟什么有关系",
            id: "1352",
          },
          {
            name: "资深庸才",
            id: "1382",
          },
          {
            name: "Things I do for love",
            id: "1398",
          },
          {
            name: "SO BAD",
            id: "895",
          },
        ];
      },
    },
  },
  methods: {
    btnShow(id) {
      this.isShowBtn = id;
    },
    hideBtn() {
      this.isShowBtn = 0;
    },
  },
};
</script>

<style scoped>
.rank_type {
  width: 225.93333px;
  border-right: 1px solid #8c8c8c;
}
.dt {
  padding: 20px 10px 20px 20px;
}
.dt_header {
  clear: both;
  overflow: hidden;
}
.rank_logo {
  float: left;
  width: 80px;
  margin-right: 8px;
  height: 80px;
  box-shadow: 0 2px 0px 1px #8c8c8c;
}
.rank_info {
  margin-left: 5px;
  padding-top: 10px;
}
.rank_info h6 {
  font-size: 15px;
  margin-bottom: 12px;
}
.add {
  cursor: pointer;
  font-size: 28px;
  color: #8c8c8c;
}
.add:hover {
  color: purple;
}
.play_rank {
  margin-right: 10px;
  cursor: pointer;
  font-size: 28px;
  color: #8c8c8c;
}
.play_rank:hover {
  color: purple;
}
.hot_ten {
  width: 225.93333px;
}
.hot_ten > ul > li {
  width: 205.93333px;
  line-height: 30px;
  display: flex;
  height: 30px;
  font-size: 14px;
  color: #666666;
  padding-left: 20px;
}

.allBox {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  height: 30px;
  line-height: 30px;
}

.songName {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 2;
}

.songName a{
  color: black;
}
.btnBox {
  flex: 3;
  display: flex;
  justify-content: flex-end;
}

.hot_ten > ul > li:nth-child(odd) {
  background-color: rgb(232, 232, 232);
}
.more {
  background-color: rgb(232, 232, 232);
  height: 30px;
  padding-right: 20px;
  text-align: right;
  line-height: 30px;
}
.more a {
  font-size: 14px;
  color: black;
}
.btn {
  padding: 0 5px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
}
.btn:hover {
  color: purple;
  cursor: pointer;
}
.top{
  color: #c20c0c;
}
.index{
  margin-right: 10px;
}
</style>