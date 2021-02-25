<template>
  <h1>示例1</h1>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
  <h1>示例2</h1>
  <div>
    <div>
      <Button>普普通</Button>
      <Button size="small">小小小</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">普普通</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">普普通</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
  </div>
  <h1>实例3</h1>
  <div>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
export default {
  components: {Button},
  setup() {
    const onClick = () => {
      // console.log(11)
    }

    return { onClick }
  }
}
</script>

<style lang="scss" scoped>

</style>