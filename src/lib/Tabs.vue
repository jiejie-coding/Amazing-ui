
<template>
  <div class="Amazing-tabs">
    <div class="Amazing-tabs-nav" ref="container">
      <div class="Amazing-tabs-nav-item" 
        v-for="(title,index) in titles" 
        :key="index" :class="{'selected': title===selected}"
        @click="toggle(title)"
        :ref="el => {if(title === selected) selectedItem = el}">{{title}}</div>
        <div class="Amazing-tabs-nav-underline" ref="underline"></div>
    </div>
    <div class="Amazing-tabs-content">
      <component class="Amazing-tabs-content-item" v-for="(content,index) in defaults" :is="content" :key="index" 
        :class="{'selected': content.props.title === selected}"/>
    </div>
  </div>
</template>


<script lang="ts">
import Tab from './Tab.vue';
import { onMounted, onUpdated, ref } from 'vue';
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props,context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const underline = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const upderlineIssue = () => {
      const { width,left:left1 } = selectedItem.value.getBoundingClientRect();
      underline.value.style.width = width + 'px';

      const { left:left2 } = container.value.getBoundingClientRect();
      const left = left2 - left1;
      underline.value.style.left = -left + 'px';
    }
    onMounted(upderlineIssue)
    onUpdated(upderlineIssue)
    
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
    return { defaults,titles,toggle,selectedItem,underline,container }
  }
}
</script>



<style lang="scss">
@import './amazing.scss';
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
        font-weight: 700;
      }
    }
    &-underline {
      position: absolute;
      width: 100px;
      left: 0;
      bottom: 0;
      height: 3px;
      background-color: $--color-selected;
      transition: all 250ms;
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