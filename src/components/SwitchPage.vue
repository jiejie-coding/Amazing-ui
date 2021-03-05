<template>
  <div class="wrapper">
    <h1>Switch组件示例</h1>
    <p>适用条件：想要表示两种状态之间的切换可以用到该组件 [on/off]</p>
    <Demo :component="SwitchDemo1" />
    <Demo :component="SwitchDemo2" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import "prismjs";
import "prismjs/themes/prism.css";
import SwitchDemo1 from "../user/SwitchDemo1.vue";
import SwitchDemo2 from "../user/SwitchDemo2.vue";
import Demo from './Demo.vue';

const Prism = (window as any).Prism;

export default {
  components: { SwitchDemo1, SwitchDemo2, Demo },
  setup() {
    const bool = ref(false);
    return {
      bool,
      SwitchDemo1,
      SwitchDemo2,
      Prism,
    };
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
