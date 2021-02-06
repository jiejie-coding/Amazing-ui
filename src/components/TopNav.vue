<template>
  <div class="topNav">
      <div class="logo">Amazing</div>
      <ul class="nav">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
  </div>
</template>

<style lang="scss" scoped>
.topNav {
  position: relative;
    z-index: 10;
    border: 1px solid red;
    height: 48px;
    line-height: 48px;
    padding: 0 20px;
    > .logo {
      font-size: 24px;
      font-weight: 700;
      float: left;
    }
    > .nav {
      float: right;
      > li {
        float: left;
        margin-left: 20px;
      }
    }
  }
</style>