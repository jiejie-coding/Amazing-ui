<demo>
  禁用按钮
</demo>

<template>
  <div>
    <Button disabled>禁用普通按钮</Button>
    <Button theme="radius" disabled>禁用圆角按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>

