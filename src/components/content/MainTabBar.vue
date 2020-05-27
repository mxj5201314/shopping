<template>
  <tabbar>
      <tabbaritem path='/home'>
        <img slot="icon" src="../../assets/img/tabbar/home.png" alt />
        <img slot="activeicon" src="../../assets/img/tabbar/homered.png" alt />
        <div slot="text">首页</div>
      </tabbaritem>

      <tabbaritem  path='/classify'>
        <img slot="icon" src="../../assets/img/tabbar/fenlei.png" alt />
        <img slot="activeicon" src="../../assets/img/tabbar/fenleired.png" alt />
        <div slot="text">分类</div>
      </tabbaritem>

      <tabbaritem path='/cart'>
        <img slot="icon" src="../../assets/img/tabbar/gwc.png" alt />
        <img slot="activeicon" src="../../assets/img/tabbar/gwcred.png" alt />
        <div slot="text">购物车</div>
      </tabbaritem>

      <tabbaritem path='/me'>
        <img slot="icon" src="../../assets/img/tabbar/me.png" alt />
        <img slot="activeicon" src="../../assets/img/tabbar/mered.png" alt />
        <div slot="text">我的</div>
      </tabbaritem>
    </tabbar>
</template>

<script>
import tabbar from '../common/tabbar/tabbar'
import tabbaritem from '../common/tabbar/tabbaritem'
export default {
    name:'maintabbar',
    components:{
        tabbar,
        tabbaritem
    }
}
</script>

<style>

</style>