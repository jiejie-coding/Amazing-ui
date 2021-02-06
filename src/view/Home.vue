<template>
  <div>
    <top-nav/>
    <div class="banner">
      <h1>Amazing UI</h1>
      <h3>一个令人惊讶的ui框架</h3>
      <div class="actions">
        <a href="https://github.com/jiejie-coding/Amazing-ui">Github</a>
        <router-link to="/doc">开始</router-link> 
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import TopNav from '../components/TopNav.vue';
export default {
  components: {TopNav}
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: pink;
  > .actions{
    padding: 8px 0;
    a {
      color: inherit;
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style> 	