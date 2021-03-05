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
    const asideVisible = ref(width >= 700 ? true : false);
    provide("asideVisible", asideVisible);
    router.afterEach(() => {
      if (width < 700) {
        asideVisible.value = false;
      }
    });
  },
};
</script>
