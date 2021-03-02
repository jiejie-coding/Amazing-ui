<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">第一个</Tab>
    <Tab title="导航2">第二个</Tab>
  </Tabs>
</template>


<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'
export default {
  components: { Tabs, Tab },
  setup() {
    const x = ref('导航1')
    return { x }
  }
}
</script>