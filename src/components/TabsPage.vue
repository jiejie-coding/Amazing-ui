<template>
<div class="wrapper">
  <h1>Tabs组件</h1>
  <p>定义了一些Button组件，在页面需要的时候导入</p>
  <Demo :component="TabsDemo1" />
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import TabsDemo1 from '../user/TabsDemo1.vue';

export default {
  components: { Demo, TabsDemo1 },
  setup() {
    return { Demo, TabsDemo1 }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.wrapper {
  text-align: left;
  padding: 30px 10px;
  p {
    padding: 30px 0;
  }
}
</style>


