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
    <div>
      <ul class="features">
        <li>
           <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shejishi"></use>
            </svg>
            <span>Excellent UI design</span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Vue"></use>
            </svg>
            <span>A Vue Component Library</span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-typescript"></use>
            </svg>
            <span>Based on typescript</span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ai-code"></use>
            </svg>
            <span>Simple code</span>
        </li>
      </ul>
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
.features {
  height: 200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > li {
    padding: 20px;
    width: 330px;
    display: flex;
    align-items: center;
    > span {
      margin-left: 20px;
      
    }
  }

  .icon {
    width: 68px;
    height: 68px;
  }
}
</style> 	