<template>
  <div class="topNav" :class="prefix && `${prefix}-topNav`">
    <span class="toggleSlide" @click="toggleAside">三</span>
    <div class="logo">
      <router-link to="/home">AmazingUI</router-link>
    </div>
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
  props: {
    prefix: String,
  },
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
.home-topNav {
  border: none;
  background-color: #131313;
  > .logo {
    > a {
      color: #888;
      &:hover {
        color: #fff;
      }
    }
  }

  .nav-input {
    color: #fff;
    border: 1px solid #ccc;
  }
  .ico-search {
    border: 1px solid #fff;
    background-color: #fff;
  }
}
</style>

<style lang="scss" scoped>
  .doc-topNav {
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  > .logo {
    a {
      color: #131313;
      &:hover,
      &:active {
        color: #888;
      }
    }
  }

  .nav-input {
    color: #131313;
    border: 1px solid #131313;
  }
  .ico-search {
    border: 1px solid #131313;
    background-color: #131313;
    color: #fff;
  }
}
</style>
<style lang="scss" scoped>
.topNav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  $h: 80px;
  height: $h;
  padding: 10px 30px;
  z-index: 10;
  text-align: left;
  > .logo {
    display: inline-block;
    margin-top: 20px;
    margin-left: 50px;
    font: 16px Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    
  }
  > .toggleSlide {
    display: none;
  }

  > .nav {
    margin-top: 20px;
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
        background-color: transparent;
        outline: none;
      }
      > .ico-search {
        display: inline-block;
        width: 40px;
      }
    }
  }
  @media (max-width: 550px) {
    > .toggleSlide {
      display: block;
      float: left;
      margin-top: 18px;
    }
    > .logo {
      display: block;
      margin: 20px 0;
      text-align: center;
    }
    > .nav {
      display: none;
    }
  }
}
</style>