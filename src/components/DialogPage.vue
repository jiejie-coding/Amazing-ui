<template>
  <h1>实例1</h1>
  <Button @click="toggle">点击弹出对话框</Button>
  <Dialog v-model:visible="x" :closeOnOverlay="true" :ok="f1" :cancel="f2">
    <template v-slot:title>提示</template>
    <template v-slot:content>这是一条提示信息</template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { ref } from 'vue';

export default {
  components: {Dialog,Button},
  setup() {
    const x = ref(false);
    const toggle = ()=> {
      x.value = !x.value;
    }
    const f1 = () => {
      // console.log("f1");
      // return false
    }

    const f2 = ()=> {
      // console.log("f2");
    }


    return { x,toggle,f1,f2 }
  }
}
</script>

<style lang="scss" scoped>

</style>