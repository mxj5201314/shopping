<template>
  <div class="tabbaritem" @click="itemClick">
    <slot v-if="isActive" name="icon"></slot>
    <slot v-else name="activeicon"></slot>
    <div :class="{active:!isActive}">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path: String
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path);
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path == this.path)
        return
      this.$router.replace(this.path)
    }
  }
};
</script>

<style>
.tabbaritem {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tabbaritem img {
  height: 24px;
  width: 24px;
  margin-top: 1px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: red;
}
</style>