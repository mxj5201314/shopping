<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <homeswiper :banners="banners"></homeswiper>
    <recommendview :recommends="recommends"></recommendview>
  </div>
</template>

<script>
import navbar from "../../components/common/navbar/NavBar";
import homeswiper from "./childComps/HomeSwiper";
import recommendview from "./childComps/RecommendView";

import { getHomeMultidata } from "../../network/HomeRequest";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  components: {
    navbar,
    homeswiper,
    recommendview
  },
  created() {
    // 1,请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(res.data.banner.list);
    });
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: white;
  font-weight: bold;
}
</style>



