<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommenditem">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendview",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  border-bottom: 10px solid #eee;
}
.recommenditem{
    flex: 1;
    text-align: center;
    font-size: 14px;
    margin-bottom: 8px;
}
.recommenditem img{
    width: 94%;
    margin-bottom: 4px;
}
</style>