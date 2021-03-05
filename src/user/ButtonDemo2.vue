<demo>
  不同大小
</demo>

<template>
  <div>
    <div>
      <Button size="big">大号普通按钮</Button>
      <Button>中号普通按钮</Button>
      <Button theme="button" size="small">小号普通按钮</Button>
    </div>
    <div>
      <Button theme="link" size="big">大号链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button size="small" theme="link">小号链接按钮</Button>
    </div>
    <div>
      <Button theme="radius" size="big">大号圆角边框</Button>
      <Button theme="radius">中号圆角边框</Button>
      <Button theme="radius" size="small">小号圆角边框</Button>
    </div>
    <div>
      <Button size="big" theme="text">大号文本按钮</Button>
      <Button theme="text">普通文本按钮</Button>
      <Button size="small" theme="text">小号文本按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
export default {
  components: {Button},
}
</script>

