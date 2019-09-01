<template lang="pug">
  el-row
    el-col( v-bind:span="24" )
      el-row(
        type="flex"
        justify="start"
        align="middle"
      )
        el-col( v-bind:span="24" )
          h1(
            id="rules"
            style="text-align: left;"
          ) <i class="el-icon-cpu"/> Debuger
          p( style="text-align: left;" ) TBA
</template>

<script>
export default {
  name: 'debeger'
}
</script>

<style lang="scss" scoped>
  h1 {
    padding: 12px 16px;
    background-color: rgba(0, 0, 0, 0.09);
    border-radius: 8px;
  }
</style>