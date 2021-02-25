<template>
  <button v-bind="$attrs" class="button" :class="`theme-${theme}`">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>