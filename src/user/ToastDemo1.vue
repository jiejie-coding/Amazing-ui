<demo>
  基础用例
</demo>

<template>
  <div>
    <Button @click="toggleVisibleTop" >上方弹出</Button>
    <Button @click="toggleVisibleMiddle" >中间弹出</Button>
    <Button @click="toggleVisibleBottom" >下方弹出</Button>
    <Toast v-model:visible="isShow" :position="position"> 我是一个小弹窗！ </Toast>
  </div>
</template>


<script lang="ts">
import Button from "../lib/Button.vue";
import Toast from "../lib/Toast.vue";
import { ref } from "vue";
export default {
  components: { Toast, Button },
  setup() {
    const isShow = ref(false);
    const position = ref('top');
    let handle = null;

    function setTime() {
      isShow.value = true;
      if(handle) {
        window.clearTimeout(handle);
      }
      handle = setTimeout(()=>{
        isShow.value = false;
      },2000)
    }
    const toggleVisibleTop = () => {
      position.value = 'top';
      setTime();
    }
    const toggleVisibleMiddle = () => {
      position.value = 'middle'
      setTime();
    }
    const toggleVisibleBottom = () => {
      position.value = 'bottom'
      setTime();
    }

    return { isShow,toggleVisibleTop,toggleVisibleMiddle,toggleVisibleBottom,position }
  },
};
</script>

