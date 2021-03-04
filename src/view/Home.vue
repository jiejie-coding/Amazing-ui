<template>
  <div>
    <top-nav prefix="home"/>
    <div class="banner">
      <h1>
        <img src="../assets/imgs/logo.png"/>
      </h1>
      <div class="actions">
        <router-link to="/home">home</router-link>
        <a href="https://github.com/jiejie-coding/Amazing-ui">Github</a>
        <router-link to="/doc">start</router-link>
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
  padding: 120px 0px 60px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #131313;
  color: #fff;
  > h3 {
    margin: 15px 0;
  }
  > .actions{
    padding: 50px 0;
    font: 16px Arial, Helvetica, sans-serif;
    font-family: 'Teko', sans-serif;
    text-transform: uppercase;
    letter-spacing: .2px;
    & :first-child {
      color: #666;
      background: #fff;
    
    }
    a {
      color: #fff;
      display: inline-block;
      margin:0 20px;
      padding: 10px 15px;
      transition: all .2s;
      &:hover {
        background-color: #fff;
        color: #131313;
        
      }
    }
    
  }
}
</style> 	