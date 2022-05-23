<template>
  <div>
    <header-comp />
    <div>
      <featured-comp />
      <menu-comp />
    </div>
    <footer-comp />
  </div>
</template>

<script>
import HeaderComp from "./components/Header-footer/HeaderComp.vue";
import FooterComp from "./components/Header-footer/FooterComp.vue";
import FeaturedComp from "./components/Featured/FeaturedComp.vue";
import MenuComp from "./components/Menu/MenuComp.vue";

export default {
  components: { HeaderComp, FooterComp, FeaturedComp, MenuComp },
};
</script>

<style>
@import "./assets/style.css";
</style>
