<template>
  <div>
    <top-nav prefix="home" />
    <div class="banner">
      <h1>
        <img src="../assets/imgs/logo.png" />
      </h1>
      <ul class="actions">
        <li class="actions-item actions-checked">
          <router-link to="/home">home</router-link>
        </li>
        <li class="actions-item">
          <a href="https://github.com/jiejie-coding/Amazing-ui">Github</a>
        </li>
        <li class="actions-item">
          <router-link to="/doc">start</router-link>
        </li>
      </ul>
    </div>
    <div>
      <ul class="features">
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shejishi"></use>
          </svg>
          <div class="features-text">
            <p class="features-text-title">UI设计</p>
            <p class="features-text-main">融合了许多优秀的UI设计</p>
          </div>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <div class="features-text">
            <p class="features-text-title">基于Vue3</p>
            <p class="features-text-main">使用了许多Vue3的新特性</p>
          </div>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <div class="features-text">
            <p class="features-text-title">基于Typescript</p>
            <p class="features-text-main">全程使用Typescript编写</p>
          </div>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ai-code"></use>
          </svg>

          <div class="features-text">
            <p class="features-text-title">代码简洁</p>
            <p class="features-text-main">每个组件的源代码简洁易读</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import TopNav from "../components/TopNav.vue";
export default {
  components: { TopNav },
};
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
  .actions {
    padding: 10px 0 30px;
    display: flex;
    font: 16px Arial, Helvetica, sans-serif;
    font-family: "Teko", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.2px;
    &-checked.actions-item {
      background-color: #fff;
      > a {
        color: #131313;
        &:hover {
          color: fade-out($color: #131313, $amount: 0.3);
        }
      }
    }
    &-item {
      position: relative;
      margin: 15px;
      z-index: 1;
      > a {
        color: #fff;
        display: block;
        padding: 10px 20px;
      }
      &::after {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 0px;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: #fff;
        transition: all 250ms;
      }
      &:hover {
        > a {
          color: #131313;
        }
        &::after {
          height: 100%;
        }
      }
    }
  }
}
.features {
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > li {
    padding: 20px;
    width: 240px;
    .features-text {
      color: #131313;
      &-title {
        font-size: 20px;
        margin: 10px;
      }
      &-main {
        font-size: 16px;
      }
    }
    > .icon {
      width: 68px;
      height: 68px;
    }
  }
}
</style> 	