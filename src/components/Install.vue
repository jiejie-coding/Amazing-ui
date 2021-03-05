<template>
  <div class="markdown-body" v-html="install"/>
</template>

<script>
import install from '../markdown/install.md';
export default {
  data() {
    return { install }
  }
}
</script>

<style lang="scss" scoped>
  .markdown-body {
    // border: 1px solid red;
    text-align: left;
    padding: 40px;
  }
</style>
