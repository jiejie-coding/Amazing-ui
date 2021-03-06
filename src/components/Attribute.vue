<template>
  <div class="Amazing-attr">
    <h1>Attributes</h1>
    <table class="attr-table">
      <thead>
        <tr>
          <th class="attr-title" v-for="item in columns" :key="item">{{ item.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in data" :key="index">
          <td class="attr-title td" v-for="value in item" :key="value">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      columns: {
        type: Object,
        default: [
          {name: '参数'},
          {name: '说明'},
          {name: "类型"},
          {name: '可选值'},
          {name: '默认值'}
        ]
      },
      data: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
.Amazing-attr {
  width: 100%;
  overflow-x: auto;
  
  .attr-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    margin: 30px 0;
    line-height: 1.5em;
  }
  .attr-title {
    text-align: left;
    color: #909399;
    font-weight: 400;
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }
  .td {
    color: #606266;
  }
}
</style>