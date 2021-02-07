<template>
  <div class="topNav">
    <span class="toggleSlide" @click="toggleAside">三</span>
    <div class="logo">Amazing</div>
    <ul class="nav">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>
<style lang="scss" scoped>
.topNav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  border: 1px solid red;
  $h: 54px;
  height: $h;
  line-height: $h;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  > .toggleSlide {
    display: none;
  }
  > .logo {
    font-size: 24px;
    font-weight: 700;
  }
  > .nav {
    display: flex;
    > li {
      margin-left: 20px;
    }
  }
  @media (max-width: 550px) {
    > .toggleSlide {
      display: block;
    }
    > .logo {
      margin: auto;
    }
    > .nav {
      display: none;
    }
  }
}
</style>