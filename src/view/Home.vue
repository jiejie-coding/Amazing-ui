<template>
  <div>
    <top-nav/>
    <div class="banner">
      <h1>Amazing UI</h1>
      <h3>一个适合初级前端学习的ui框架</h3>
      <div class="actions">
        <a href="https://github.com/jiejie-coding/Amazing-ui">Github</a>
        <router-link to="/doc">起步</router-link>
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
  //background: pink;
  background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);
  //background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
  //background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  //background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
  //background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
  > h3 {
    margin: 15px 0;
  }
  > .actions{
    padding: 8px 0;
    a {
      color: inherit;
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 35px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0px 15px;
    }
  }
}
</style> 	