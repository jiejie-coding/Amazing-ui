<template>
  <button v-bind="$attrs" class="Amazing-button" :class="classes" :disabled="disabled">
    <span class="Amazing-button-loading" v-if="loading"/>
    <slot/>
  </button>
</template>

<script lang="ts">
import { computed  } from 'vue';
export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { theme, size } = props;
    const classes = computed (() => {
      return {
        [`Amazing-theme-${theme}`]: theme,
        [`Amazing-size-${size}`]: size,
      }
    })
    return { classes }
  }
};
</script>

<style lang="scss">
@import 'amazing.scss';
  $h: 32px;
  $radius: 3px;

  .Amazing-button {
    
    box-sizing: border-box;
    height: $h;
    line-height: $h;
    padding: 16px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    white-space: nowrap;
    background: white;
    color: #333;
    border: 1px solid $--color-primary;
    border-radius: $radius;
    outline: none;
    &[disabled] {
        cursor: not-allowed;
    }
    & + & {
      margin-left: 24px;
    }

    &:hover,
    &:focus {
      color: $--color-selected;
      border-color: $--color-selected;
    }

    &.Amazing-theme-radius{
      color: inherit;
      border-radius: $h/2;
      &.Amazing-size-big{
        border-radius: 24px;
      }
      &.Amazing-size-small{
        border-radius: 16px;
      }
      
      &:hover,&:focus {
        color: $--color-selected;
        border-color: $--color-selected;
      }
    }

    &.Amazing-theme-link{
      border-color: transparent;
      color: $--color-selected;
      &:hover,&:focus{
        color: lighten($--color-selected, 10%);
      }
    }
    &.Amazing-theme-text{
      border-color: transparent;
      color: inherit;
      &:hover,&:focus{
        background: darken(white, 5%);;
      }
    }

    &.Amazing-theme-grey{
      border-color: transparent;
      color: #fff;
      background-color: #909399;
      &:hover,&:focus{
        background:#A6A9AD;
      }
    }

    &.Amazing-theme-green{
      border-color: transparent;
      color: #fff;
      background-color: #6DC442;
      &:hover,&:focus{
        background: #85CE61;
      }
    }

    &.Amazing-theme-red{
      border-color: transparent;
      color: #fff;
      background-color: #F56C6C;
      &:hover,&:focus{
        background: #F78989;
      }
    }

    &.Amazing-size-big{
      font-size: 24px;
      height: 48px;
      line-height: 48px;
      // padding: 0 16px
    }
    &.Amazing-size-small{
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      // padding: 4px;
    }
    > .Amazing-button-loading {
      width: 14px;
      height: 14px;
      background-color: transparent;
      border: 2px solid $--color-selected;
      border-bottom: transparent;
      border-radius: 50%;
      margin-right: 4px;
      animation: .5s Amazing-loading infinite linear;
    }
    @keyframes Amazing-loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>