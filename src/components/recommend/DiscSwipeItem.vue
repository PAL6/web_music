<template>
  <div class="new_disc">
    <NewDiscCard v-for="item in list" :key="item.id" :disc="item" @tag = 'towSend(item)'></NewDiscCard>
  </div>
</template>


<script>
import NewDiscCard from "@/components/recommend/NewDiscCard";

export default {
  name: "DiscSwipeItem",
  props:{
    list:{
      type:Array,
      default:[]
    }
  },
  components: {
    NewDiscCard
  },
  methods:{
    towSend(item){
      this.$emit('discId',item)
    }
  }
}
</script>

<style scoped>
.new_disc {
  background-color: #f5f5f5;
  display: flex;
  border: 1px solid gray;
  padding: 30px 40px;
  margin-top: 20px;
}
</style>