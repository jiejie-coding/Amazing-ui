<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
import router from "./router"
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width >= 550 ? true : false);
    provide("asideVisible", asideVisible);
    router.afterEach(() => {
      if (width < 550) {
        console.log(1111);
        asideVisible.value = false;
      }
    });
  },
};
</script>
