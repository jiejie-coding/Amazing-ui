<template>
  <div class="markdown-body" v-html="intro"/>
</template>

<script>
import intro from '../markdown/intro.md';
export default {
  data() {
    return { intro }
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
