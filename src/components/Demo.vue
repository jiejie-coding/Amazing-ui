<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <div class="demo-actions-toggle" @click="toggle">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xialaliebiao2"></use>
          </svg>
      </div>
    </div>
    <div class="demo-code" v-if="isShow">
      <pre class="language-html" v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')"/>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism.css";
import { ref } from "vue";
const Prism = (window as any).Prism;
export default {
  components: { Button },
  props: {
    component: Object,
  },
  setup() {
    const isShow = ref(false);
    const toggle = () => {
      isShow.value = !isShow.value;
    };
    return { Prism, toggle, isShow };
  },
};
</script>



<style lang="scss" scoped>
$border-color: #d9d9d9;
.wrapper {
  text-align: left;
  padding: 30px 50px 30px 30px;
}
.demo {
  border: 1px solid $border-color;
  border-radius: 5px;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    box-sizing: border-box;
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    &-toggle {
      text-align: center;
    }
  }
  &-code {
    min-width: 200px;
    // border: 2px solid red;
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    width: inherit;
    overflow: hidden;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
