<template>
<div class="wrapper">
  <h1>Diolog组件</h1>
  <p>定义了一些Button组件，在页面需要的时候导入</p>
  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
</div>
</template>

<script lang="ts">
import DialogDemo1 from '../user/DialogDemo1.vue';
import DialogDemo2 from '../user/DialogDemo2.vue';
import Demo from './Demo.vue';

export default {
  components: { Demo, DialogDemo1, DialogDemo2 },
  setup() {
    return { DialogDemo1,DialogDemo2 }
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
