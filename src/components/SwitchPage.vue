<template>
  <div>
     <Switch v-model:value="bool"/>
     <Switch v-model:value="bool1" disabled />
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import { ref } from 'vue';
export default {
  components: {Switch},
  setup(){
    const bool = ref(false)
    const bool1 = ref(false)
    return { bool,bool1 }
  }
}
</script>
