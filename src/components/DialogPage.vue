<template>
  <h1>实例1</h1>
  <Button @click="toggle">点击弹出对话框</Button>
  <Dialog v-model:visible="x"/>
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
    return { x,toggle }
  }
}
</script>

<style lang="scss" scoped>

</style>