<template>
<div class="wrapper">
  <h1>Button组件</h1>
  <p>定义了一些Button组件，在页面需要的时候导入</p>
  <Demo :component="ButtonDemo1" />
  <Demo :component="ButtonDemo2" />
  <Demo :component="ButtonDemo3" />
  <Demo :component="ButtonDemo4" />
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue';

import ButtonDemo1 from '../user/ButtonDemo1.vue';
import ButtonDemo2 from '../user/ButtonDemo2.vue';
import ButtonDemo3 from '../user/ButtonDemo3.vue';
import ButtonDemo4 from '../user/ButtonDemo4.vue';
export default {
  components: { Demo },
  setup() {
    return { ButtonDemo1,ButtonDemo2,ButtonDemo3,ButtonDemo4 }
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