<template>

  <div class="Amazing-tabs">
    <div class="Amazing-tabs-nav">
      <div class="Amazing-tabs-nav-item" 
        v-for="(title,index) in titles" 
        :key="index" :class="{'selected': title===selected}"
        @click="toggle(title)">{{title}}</div>
        <div class="Amazing-tabs-nav-underline"></div>
    </div>
    <div class="Amazing-tabs-content">
      <component class="Amazing-tabs-content-item" v-for="(content,index) in defaults" :is="content" :key="index" 
        :class="{'selected': content.props.title === selected}"/>
    </div>
  </div>
</template>


<script lang="ts">
import Tab from './Tab.vue';
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props,context) {
    
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if(tag.type !== Tab) {
        throw new Error("Tabs 的子组件必须是Tab");
      }
    })
    const titles = defaults.map(tag => {
      return tag.props.title;
    })
    
    let toggle = function(title) {
      context.emit('update:selected',title);
    }
    return { defaults,titles,toggle }
  }
}
</script>



<style lang="scss">
@import './engineer.scss';
$color: #333;
$border-color: #d9d9d9;
.Amazing-tabs {
  &-nav {
    position: relative;
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $--color-selected;
      }
    }
    &-underline {
      position: absolute;
      width: 100px;
      left: 0;
      bottom: 0;
      height: 3px;
      background-color: red;
    }
  }
  &-content {
    padding: 8px 0;
    text-align: left;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>