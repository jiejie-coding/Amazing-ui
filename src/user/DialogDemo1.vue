<demo>
  基本用例
</demo>

<template>
<div>
  <Button @click="toggle">点击弹出对话框</Button>
  <Dialog v-model:visible="visible" :ok="f1" :cancel="f2">
    <template v-slot:title>提示</template>
    <template v-slot:content>这是一条提示信息</template>
  </Dialog>
  </div>
</template>


<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { ref } from 'vue';

export default {
  components: {Dialog,Button},
  setup() {
    const visible = ref(false);
    const toggle = ()=> {
      visible.value = !visible.value;
    }
    const f1 = () => {
      // 确认执行f1
    }

    const f2 = ()=> {
      // 取消执行f2
    }

    return { visible,toggle,f1,f2 }
  }
}
</script>

