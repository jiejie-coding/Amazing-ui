<template>
<div class="wrapper">
  <h1>Tabs组件</h1>
  <p>定义了一些Button组件，在页面需要的时候导入</p>
  <Demo :component="ToastDemo1" />
  <Attribute :data="data" />
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import ToastDemo1 from '../user/ToastDemo1.vue';
import Attribute from '../components/Attribute.vue';
export default {
  components: { Demo, ToastDemo1, Attribute },
  setup() {
    const data = [
      {
        params: "visible",
        desc: "是否可见",
        type: "Boolean",
        select: " false / true ",
        default: " false ",
      },
      {
        params: "position",
        desc: "出现的位置",
        type: " String ",
        select: " top / middle, bottom ",
        default: " top ",
      }
    ];
    return { Demo, ToastDemo1, data }
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


