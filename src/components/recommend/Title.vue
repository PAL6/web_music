<template>
  <div class="title">
    <slot name = "icon"></slot>
    <span class="type">{{ title }}</span>
    <slot name="nav"></slot>
    <div class="more" v-show="showMore">
      <a href="#">更多</a>
      <van-icon name="other-pay" class="more_icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: '热门推荐'
    },
    showMore:{
      type:Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  position: relative;
  border-bottom: 3px #c20c0c solid;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 15px 0;
}
.type{
  font-size: 20px;
  font-weight: bold;
}
.icon {
  margin-right: 10px;
  font-size: 20px;
  color: #c20c0c;
}
.more{
  display: flex;
  justify-items: center;
  align-items: center;
  position: absolute;
  right: 10px;
}
.more a{
  color: black;
  font-size: 14px;
}
.more_icon{
  margin-left: 5px;
  color: #c20c0c;
  font-size: 20px;
}
</style>