<template>
  <div class="topNav">
    <span class="toggleSlide" @click="toggleAside">三</span>
    <!-- <div class="logo"><router-link to="/home">
  
    </router-link></div> -->
    <ul class="nav">
      <li class="nav-search">
        <input class="nav-input nav-search-item" />
        <span class="ico-search nav-search-item">+</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>
<style lang="scss" scoped>
.topNav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  $h: 80px;
  height: $h;
  padding: 10px 30px;

  background-color: transparent;
  
  > .toggleSlide {
    display: none;
  }

  > .nav {
    margin-top: 30px;
    float: right;
    > li {
      margin-right: 20px;
    }
    > .nav-search {
      > .nav-search-item {
        box-sizing: border-box;
        padding: 10px;
        font-size: 15px;
      }
      > .nav-input {
        color: #fff;
        background-color: transparent;
        border: 1px solid #ccc;
        outline: none;
      }
      > .ico-search {
        display: inline-block;
        width: 40px;
        border: 1px solid #fff;
        background-color: #fff;
      }
    }
  }
  @media (max-width: 550px) {
    > .toggleSlide {
      display: block;
    }
    > .logo {
      margin: auto;
    }
    > .nav {
      display: none;
    }
  }
}
</style>