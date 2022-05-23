<template>
  <header>
    <div class="container clear">
      <div class="logo">
        <img :src="logoIcon" alt="" />
      </div>
      <div class="nav">
        <img :src="menuIcon" @click="showSidePanel = !showSidePanel" alt="" />
      </div>

      <MdDrawer md-right :md-active.sync="showSidePanel" class="side-drawer">
      </MdDrawer>
    </div>
  </header>
</template>

<script>
import Logo from "../../assets/images/logo.png";
import Menu from "../../assets/images/menu.png";
export default {
  name: "HeaderComp",
  data() {
    return {
      logoIcon: Logo,
      menuIcon: Menu,
      showSidePanel: false,
    };
  },
};
</script>
