<template>
  <h1>示例1</h1>
  <Button theme="button">普通按钮</Button>
  <Button theme="radius">圆角按钮</Button>
  <Button theme="link">链接按钮</Button>
  <Button theme="text">文本按钮</Button>
  <h1>示例2</h1>
  <div>
    <div>
      <Button size="big">大号普通按钮</Button>
      <Button>中号普通按钮</Button>
      <Button theme="button" size="small">小号普通按钮</Button>
    </div>
    <div>
      <Button theme="radius" size="big">大号圆角边框</Button>
      <Button theme="radius">中号圆角边框</Button>
      <Button theme="radius" size="small">小号圆角边框</Button>
    </div>
    <div>
      <Button theme="link" size="big">大号链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button size="small" theme="link">小号链接按钮</Button>
    </div>
    <div>
      <Button size="big" theme="text">大号文本按钮</Button>
      <Button theme="text">普通文本按钮</Button>
      <Button size="small" theme="text">小号文本按钮</Button>
    </div>
  </div>
  <h1>实例3</h1>
  <div>
    <div>
      <Button disabled>禁用普通按钮</Button>
      <Button theme="radius" disabled>禁用圆角按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用文本按钮</Button>
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