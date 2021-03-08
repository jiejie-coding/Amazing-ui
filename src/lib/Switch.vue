<template>
  <button  @click="toggle" :class="{'amazing-checked':value}" :disabled="disabled">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props,context){
    const toggle = ()=>{
      context.emit('update:value',!props.value);
    }
    return { toggle }
  } 
}
</script>


<style lang="scss" scoped>
@import 'amazing.scss';
  $h: 22px;
  $h2: $h - 4px;
  button{
    height: $h;
    width: $h*2;
    border: none;
    background: $--color-primary;
    border-radius: $h/2;
    position: relative;
    outline: 0;
    &:active{
        > span {width: $h2 + 4px;}
      }
    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background:white;
      border-radius: $h2 / 2;
      transition: left 250ms;
      
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
   	  
  button.amazing-checked{
    background: $--color-selected;
      &:active{
        > span {
          width: $h2 + 4px;
          margin-left: -4px;
        }
      }
      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    }

</style>