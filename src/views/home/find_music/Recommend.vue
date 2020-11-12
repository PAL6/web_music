<template>
  <div class="all">
    <div class="back_top1">
      <a href="#" class="back_top" v-show="backTop">返回</a>
    </div>
    <div class="recommend">
      <div class="header">
        <div class="my_swiper">
          <van-icon name="arrow-left" class="pre" @click="pre()"/>
          <van-icon name="arrow" class="next" @click="next()"/>
          <van-swipe
              class="my_swiper_box"
              indicator-color="#c20c0c"
              :autoplay="4000"
              ref="swiper">
            <van-swipe-item v-for="(image, index) in bannerList" :key="index">
              <img :src="image.imageUrl" alt="" class="pic">
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="download">
          <a href="#"></a>
        </div>
      </div>
      <div class="content">
        <!--左边歌单内容-->
        <div class="left_box">
          <Title></Title>
          <div class="rem">
            <MusicCard v-for="(item,index) in remList" :key="item.id" :music-info="item"
                       :class="'not'+index"></MusicCard>
          </div>
          <Title title="新碟上架"></Title>
          <div class="new_disc1">
            <span class="disc_pre" @click="discPre"><</span>
            <span class="disc_next" @click="discNext">></span>
            <van-swipe indicator-color="white" ref="disc_swiper">
              <van-swipe-item>
                <DiscSwipeItem :list="disc.list1" @discId="discId"></DiscSwipeItem>
              </van-swipe-item>
              <van-swipe-item>
                <DiscSwipeItem :list="disc.list2" @discId="discId"></DiscSwipeItem>
              </van-swipe-item>
            </van-swipe>
          </div>
          <Title title="榜单"></Title>
          <div class="rank">
            <span @click="pushToRank">榜单</span>
          </div>
        </div>
        <!--右边主播电台-->
        <div class="right_box">
          <!--登录-->
          <div class="login_introduce">
            <span>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</span>
            <a href="#">用户登录</a>
          </div>
          <!--歌手-->
          <div class="singer">
            <div class="singer_header">
              <span>入驻歌手</span>
              <a href="#">查看全部 ></a>
            </div>
            <div class="singer_box">
              <ul>
                <li v-for="item in hotSinger" :key="item.id">
                  <SingerCard :singer="item"></SingerCard>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getMethod} from "@/api/http";
import Title from "@/components/recommend/Title";
import MusicCard from "@/components/home/MusicCard";
import SingerCard from "@/components/recommend/SingerCard";
import NewDiscCard from "@/components/recommend/NewDiscCard";
import DiscSwipeItem from "@/components/recommend/DiscSwipeItem";

export default {
  name: "Recommend",
  components: {
    Title,
    MusicCard,
    SingerCard,
    NewDiscCard,
    DiscSwipeItem
  },
  data() {
    return {
      bannerList: [],
      remList: [],
      hotSinger: [],
      disc: {
        'list1': [],
        'list2': []
      },
      backTop: false,
    }
  },
  created() {
    this.getBanner();
    this.getRem();
    this.getHotSinger();
    this.getDisc()
  },
  methods: {
    getBanner() {
      getMethod('/banner').then(res => {
        console.log(res.data.banners);
        this.bannerList = res.data.banners;
      }).catch(err => {
        console.log(err);
      })
    },
    getRem() {
      getMethod('/personalized', {
        'limit': 8
      }).then(res => {
        this.remList = res.data.result
      }).catch(err => {
        console.log(err);
      })
    },
    getHotSinger() {
      getMethod('/artist/list', {
        'type': -1,
        'area': -1,
        'initial': -1,
        'offset': 1,
        'limit': 5
      }).then(res => {
        this.hotSinger = res.data.artists;
      }).catch(err => {
        console.log(err);
      })
    },
    getDisc() {
      getMethod('/album/new', {
        'limit': 10,
      }).then(res => {
        console.log(res.data.albums)
        this.disc.list1 = res.data.albums.slice(0, 5);
        this.disc.list2 = res.data.albums.slice(5, 10);
        console.log(this.disc.list2)
      }).catch(err => {
        console.log(err)
      })
    },
    //轮播图上一张
    pre() {
      this.$refs.swiper.prev()
    },
    discPre() {
      this.$refs.disc_swiper.prev()
    },
    //轮播图下一张
    next() {
      this.$refs.swiper.next()
    },
    discNext() {
      this.$refs.disc_swiper.next()
    },
    discId(query) {
      console.log(query)
    },
    handleScroll() {
      let scrollY = document.documentElement.scrollTop
      if (scrollY > 100) {
        this.backTop = true;
      } else {
        this.backTop = false;
      }
    },
    pushToRank(){
      this.$router.push('/rank');
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>

<style scoped>
.all {
  width: 1000px;
  margin: 0 auto;
  min-width: 1000px;
  position: relative;
}

.recommend {
  width: 979px;
  padding: 0 60px;
  min-width: 979px;
  margin: 0 auto;
}

.header {
  display: flex;
}

.pic {
  height: 283px;
  width: 100%;
}

.my_swiper_box {
  height: 283px;
  width: 730px;
}

.my_swiper {
  width: 730px;
  position: relative;
}

.pre {
  font-size: 50px;
  position: absolute;
  z-index: 1000;
  top: 116px;
  color: white;
  left: 0;
}

.next {
  font-size: 50px;
  position: absolute;
  z-index: 1000;
  color: white;
  top: 116px;
  right: 0;
}

.download {
  position: relative;
  height: 283px;
  width: 249px;
  background: url("https://s2.music.126.net/style/web2/img/index/download.png?9aa3878eea913cf1ac35bf9e17c2ef5e");
}

.download a {
  position: absolute;
  display: block;
  height: 50px;
  bottom: 45px;
  left: 20px;
  width: 210px;
}

.content {
  width: 977px;
  min-width: 977px;
  margin: 0 auto;
  display: flex;
  border: 1px solid #cccccc;
  border-top: 0px;
}

.left_box {
  width: 681px;
  padding: 0 24px;
  border-right: 1px solid #cccccc;
}

.rem {
  width: 680px;
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
}

.new_disc1 {
  overflow: hidden;
  border-right: 1px solid transparent;
  margin-bottom: 0;
  position: relative;
}


.disc_pre {
  position: absolute;
  left: 10px;
  font-size: 30px;
  top: 130px;
  z-index: 1000;
  cursor: pointer;
}

.disc_next {
  position: absolute;
  right: 10px;
  font-size: 30px;
  top: 130px;
  cursor: pointer;
  z-index: 1000;
}

.not3, .not7 {
  margin-right: 0 !important;
}

.right_box {
  position: relative;
}

.login_introduce {
  text-align: center;
  padding: 20px;
  width: 209px;
  background-image: linear-gradient(#f5f5f5, #cccccc);
  height: 100px;
  box-shadow: 0 2px 0 0 gray;
}

.login_introduce span {
  font-size: 12px;
  color: #666666;
}

.login_introduce a {
  display: block;
  padding: 10px;
  margin-top: 20px;
  background: #c20c0c;
  color: white;
  border-radius: 8px;
}

.singer {
  padding: 20px;
  width: calc(100% - 40px);
}

.singer_header {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 5px;
}

.singer_header a {
  color: gray;
}

.singer_box ul {
  margin-top: 20px;
}

.singer_box ul > li {
  margin: 18px 0;
}

.back_top {
  display: block;
  background-color: #8c8c8c;
  color: white;
  border-radius: 5px;
  position: fixed;
  padding: 10px;
  bottom: 20px;
}

.back_top1 {
  display: block;
  height: 100%;
  background-color: #8c8c8c;
  color: white;
  bottom: 200px;
  border-radius: 5px;
  position: absolute;
  right: -50px;
}

.rank {
  height: 300px;
  background-color: #c20c0c;
}
</style>