<template>
  <div class="layout">
    <top-nav class="nav" prefix="doc" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档页</h2>
        <ol>
          <li><router-link to="/doc/intro">介绍</router-link></li>
          <li><router-link to="/doc/install">安装</router-link></li>
          <li><router-link to="/doc/start-use">开始使用</router-link></li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li><router-link to="/doc/switch">Switch 开关</router-link></li>
          <li><router-link to="/doc/button">Button 按钮</router-link></li>
          <li><router-link to="/doc/dialog">Dialog 对话框</router-link></li>
          <li><router-link to="/doc/tabs">Tabs 标签页</router-link></li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang='ts'>
import TopNav from "../components/TopNav.vue";
import { inject, Ref } from "vue";
export default {
  components: { TopNav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");

    return { asideVisible };
  },
};
</script>


<style lang="scss" scoped>
.router-link-active {
  background-color: rgba(0, 0, 0, 0.3);
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 20%;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: #fff;
  color: #131313;
  width: 20%;
  min-width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  border-right: 1px solid #ccc;
  z-index: 8;
  > h2 {
    margin: 20px 0;
    text-align: left;
    padding-left: 15%;
  }
  > ol {
    > li {
      // border: 1px solid red;
      margin-top: 10px;
      > a {
        // height: 32px;
        line-height: 36px;
        display: block;
        color: inherit;
        padding: 4px 0 0 20%;
        text-align: left;
        // transition: all .2s;
        // &:hover {
        //   transform: translateX(10px);
        // }
      }
    }
  }
}
</style> 