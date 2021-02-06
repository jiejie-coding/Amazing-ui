<template>
  <div>
    <top-nav/>
    <div class="banner">
      <h1>Amazing-ui</h1>
      <h2>一个厉害的ui框架</h2>
    </div>
    <div class="actions">
      <a>Github</a>
      <a>开始</a> 
    </div>
  </div>
</template>

<script lang='ts'>
import TopNav from '../components/TopNav.vue';
export default {
  components: {TopNav}
}
</script>