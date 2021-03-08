
<template>
  <div class="Amazing-toast"
    :class="[visible === true ? 'Amazing-appear' : 'Amazing-dispear',
    position && `Amazing-${position}`]">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    visible: {
      type: Boolean,
      defalut: false,
    },
    position: {
      type: String,
      default: 'top'
    }
  },

};
</script>


<style lang="scss" scoped>
.Amazing-toast {
  position: fixed;
  color: #fff;
  padding: 10px 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  font-size: 16px;
  border-radius: 8px;
  background-color: fade-out($color: #131313, $amount: 0.4);

  &.Amazing-top {
    top: 8px;
  }
  &.Amazing-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
  &.Amazing-bottom {
    bottom: 8px;
    
  }
}
.Amazing-dispear {
  opacity: 0;
  transition: opacity 1s;
}

.Amazing-appear {
  opacity: 1;
  transition: opacity 1s;
}
</style>