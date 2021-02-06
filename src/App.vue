<template>
  <div>
    <router-link to="/home">首页</router-link> |
    <router-link to="/Doc">文档页</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>
