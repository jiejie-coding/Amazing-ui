<template>
  <button v-bind="$attrs" class="engineer-button" :class="classes" :disabled="disabled">
    <slot/>
  </button>
</template>

<script lang="ts">
import { computed  } from 'vue';
export default {
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
  },
  setup(props) {
    const { theme, size } = props;
    const classes = computed (() => {
      return {
        [`engineer-theme-${theme}`]: theme,
        [`engineer-size-${size}`]: size,
      }
    })
    return { classes }
  }
};
</script>

<style lang="scss">
@import 'engineer.scss';
  $h: 32px;
  $radius: 3px;

  .engineer-button {
    box-sizing: border-box;
    height: $h;
    line-height: $h;
    padding: 16px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: #333;
    border: 1px solid $--color-primary;
    border-radius: $radius;
    outline: none;
    & + & {
      margin-left: 8px;
    }

    &:hover,
    &:focus {
      color: $--color-selected;
      border-color: $--color-selected;
    }

    &.engineer-theme-radius{
      color: inherit;
      border-radius: $h/2;
      &.engineer-size-big{
        border-radius: 24px;
      }
      &.engineer-size-small{
        border-radius: 10px;
      }
      &:hover,&:focus {
        color: $--color-selected;
        border-color: $--color-selected;
      }
    }

    &.engineer-theme-link{
      border-color: transparent;
      color: $--color-selected;
      &:hover,&:focus{
        color: lighten($--color-selected, 10%);
      }
    }
    &.engineer-theme-text{
      border-color: transparent;
      color: inherit;
      &:hover,&:focus{
        background: darken(white, 5%);;
      }
    }

    &.engineer-theme-grey{
      border-color: transparent;
      color: #fff;
      background-color: #909399;
      &:hover,&:focus{
        background:#A6A9AD;
      }
    }

    &.engineer-theme-green{
      border-color: transparent;
      color: #fff;
      background-color: #6DC442;
      &:hover,&:focus{
        background: #85CE61;
      }
    }

    &.engineer-theme-red{
      border-color: transparent;
      color: #fff;
      background-color: #F56C6C;
      &:hover,&:focus{
        background: #F78989;
      }
    }

    &.engineer-size-big{
      font-size: 24px;
      height: 48px;
      padding: 0 16px
    }
    &.engineer-size-small{
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }

    &.engineer-theme-button{
      &[disabled] {
        cursor: not-allowed;
        color: grey;
        &:hover {
          border-color: grey;
        }
      }
    }
    &.engineer-theme-link, &.engineer-theme-text {
      &[disabled] {
        cursor: not-allowed;
        color: grey;
      }
    }
  }
</style>