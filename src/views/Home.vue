<template>
  <div class="home">
    <!--热门推荐-->
    <div class="nav">
      <div class="nav1">
        <ul>
          <li>
            <router-link to="/recommend" active-class="active" class="tab">推荐</router-link>
          </li>
          <li>
            <router-link to="/rank" active-class="active" class="tab">排行榜</router-link>
          </li>
          <li>
            <router-link to="/songList" active-class="active" class="tab">歌单</router-link>
          </li>
          <li>
            <router-link to="/hostStatic" active-class="active" class="tab">主播电台</router-link>
          </li>
          <li>
            <router-link to="/singer" active-class="active" class="tab">歌手</router-link>
          </li>
          <li>
            <router-link to="/newDisc" active-class="active" class="tab">新碟上架</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  methods: {},
  created() {
  }
}
</script>

<style scoped>
.nav {
  height: 34px;
  width: 100%;
  min-width: 1220px;
  background-color: #c20c0c;
}

.nav1 {
  padding-left: 55px;
  width: 915px;
  height: 100%;
  margin: 0 auto;
}

.nav1 ul {
  position: relative;
}

.nav1 ul > li {
  line-height: 34px;
  display: inline-block;
}

.nav ul:first-child:before {
  display: block;
  content: '';
  position: absolute;
  left: 47px;
  top: -9px;
  border-top: 0 solid #c20c0c;
  border-bottom: 10px solid #c20c0c;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.nav ul > li a {
  color: #ffffff;
  font-size: 14px;
  margin: 0 30px;
  padding: 5px 10px;
}

.nav ul > li a:hover {
  border-radius: 16px;
  opacity: .8;
  background-color: #242424;
}

.router-link-exact-active {
  border-radius: 16px;
  opacity: .8;
  background-color: #242424;
}

</style>
