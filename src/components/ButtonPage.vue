<template>
  <div class="wrapper">
    <h1>Button组件</h1>
    <p>定义了一些Button组件，在页面需要的时候导入</p>
    <Demo :component="ButtonDemo1" />
    <Demo :component="ButtonDemo2" />
    <Demo :component="ButtonDemo3" />
    <Demo :component="ButtonDemo4" />
    <Demo :component="ButtonDemo5" />
    <Attribute :data="data" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";

import ButtonDemo1 from "../user/ButtonDemo1.vue";
import ButtonDemo2 from "../user/ButtonDemo2.vue";
import ButtonDemo3 from "../user/ButtonDemo3.vue";
import ButtonDemo4 from "../user/ButtonDemo4.vue";
import ButtonDemo5 from "../user/ButtonDemo5.vue";
import Attribute from "../components/Attribute.vue";

export default {
  components: { Demo, Attribute },
  setup() {
    const data = [
      {
        params: "theme",
        desc: "按钮类型",
        type: "String",
        select: "button / radius / kink / text / grey / green / red",
        default: "button",
      },
      {
        params: "size",
        desc: "尺寸",
        type: "String",
        select: "normal / small / big",
        default: "normal",
      },
      {
        params: "disabled",
        desc: "是否禁用",
        type: "String",
        select: " disabled / 不传",
        default: " 不传 ",
      },
      {
        params: "loading",
        desc: "加载中",
        type: "Boolean",
        select: " true / false",
        default: " false ",
      }
    ];

    return { ButtonDemo1, ButtonDemo2, ButtonDemo3, ButtonDemo4, ButtonDemo5, data };
  },
};
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