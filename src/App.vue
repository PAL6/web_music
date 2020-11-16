<template>
  <div id="app">
    <!--顶部导航-->
    <div class="nav">
      <div class="nav1">
        <div class="logo">
          <van-icon name="diamond-o" class="app_logo"/>
          <h1 class="app_name">众享Music</h1>
        </div>
        <!--导航-->
        <div class="nav_bar">
          <router-link to="/" active-class = "active" class = "tab">发现音乐</router-link>
          <router-link to="/myMusic" active-class = "active" class = "tab">我的音乐</router-link>
          <router-link to="/friend" active-class = "active" class = "tab">朋友</router-link>
          <router-link to="/market" active-class = "active" class = "tab">商场</router-link>
          <router-link to="/musician" active-class = "active" class = "tab">音乐人</router-link>
          <router-link to="/downloadApp" active-class = "active" class = "tab">下载客户端</router-link>
        </div>
        <div class="search">
          <van-search
              v-model="value"
              placeholder="请输入搜索关键词"
              input-align="left"
              shape="round"
              class="query"
              background="#242424"
          />
        </div>
        <a href="#" class="center">创作者中心</a>
        <a href="#" class="login">登录</a>
      </div>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<!--逻辑-->
<script>
import Footer from "@/components/Footer";
export default {
  components:{
    Footer
  },
  data() {
    return {
      value: ''
    }
  }
}

</script>

<!--样式-->
<style scoped>
.nav {
  display: flex;
  height: 70px;
  line-height: 70px;
  background-color: #242424;
  width: 100%;
  min-width: 1220px;
}

.nav1 {
  display: flex;
  justify-items: center;
  align-content: center;
  height: 70px;
  width: 1220px;
  line-height: 70px;
  background-color: #242424;
  min-width: 1220px;
  margin: 0 auto;
}

.logo {
  width: 170px;
  display: flex;
  justify-items: center;
  align-items: center;
  margin-right: 20px;
}

.app_logo {
  color: #c20c0c;
  margin-right: 10px;
  font-size: 35px;
}

.app_name {
  font-size: 25px;
  display: inline-block;
  color: #c20c0c;
}

.nav_bar {
  height: 100%;
  text-align: center;
}

.nav_bar a {
  display: inline-block;
  height: 70px;
  font-size: 14px;
  padding: 0 10px;
  margin: 0 10px;
  color: #ffffff;
}

.nav_bar a:hover {
  background-color: black;
}

.active {
  background-color: black;
}
.query{
  height: 70px;
  line-height: 70px;
}

.center{
  height: 20px;
  line-height: 20px;
  margin-top: 20px;
  font-size: 12px;
  padding: 4px 8px 4px 8px;
  color: #cccccc;
  border: 1px solid #cccccc;
  border-radius: 8px;
}
.center:hover{
  color: white;
  border: 1px solid white;
}

.login{
  color: #cccccc;
  margin-left: 20px;
  font-size: 14px;
}

</style>
