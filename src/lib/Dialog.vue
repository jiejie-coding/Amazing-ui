<template>
  <div class="Amazing-dialog-overlay"></div>
  <div class="Amazing-dialog-wrapper">
    <div class="Amazing-dialog">
      <header>提示<span class="Amazing-dialog-close"></span></header>
      <main>
        这是一则提示信息
      </main>
      <footer>
        <Button>取消</Button>
        <Button theme="grey">确认</Button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';
export default {
  components: { Button }
}
</script>

<style lang="scss" scoped>
$radius: 4px;
$border-color: #d9d9d9;
.Amazing-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,.2);
  min-width: 24em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 9;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  > header {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    font-size: 16px;
    // border: 1px solid red;
    text-align: left;
    padding: 12px 16px;
  }

  > footer {
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>