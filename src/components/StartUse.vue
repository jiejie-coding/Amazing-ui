<template>
  <div class="markdown-body" v-html="startUse"/>
</template>

<script>
import startUse from '../markdown/startUse.md';
export default {
  data() {
    return { startUse }
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
