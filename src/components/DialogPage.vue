<template>
<div class="wrapper">
  <h1>Diolog组件</h1>
  <p>定义了一些Button组件，在页面需要的时候导入</p>
  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
  <Attribute :data="data"/>
</div>
</template>

<script lang="ts">
import DialogDemo1 from '../user/DialogDemo1.vue';
import DialogDemo2 from '../user/DialogDemo2.vue';
import Demo from './Demo.vue';
import Attribute from '../components/Attribute.vue';

export default {
  components: { Demo, DialogDemo1, DialogDemo2, Attribute },
  setup() {
    const data = [
      {
        params: "visible",
        desc: "是否可见",
        type: "Boolean",
        select: "true / false",
        default: "false",
      },
      {
        params: "ok",
        desc: "确认函数",
        type: "Function",
        select: " / ",
        default: " / ",
      },
      {
        params: "cancel",
        desc: "取消函数",
        type: "Function",
        select: " / ",
        default: " / ",
      },
      {
        params: "closeOnOverlay",
        desc: "是否点击空白区关闭",
        type: "Boolean",
        select: "false / true",
        default: "false",
      },
    ];
    return { DialogDemo1,DialogDemo2,data }
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
