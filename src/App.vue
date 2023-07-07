<template>
  <div class="box">
    <h2>app组件</h2>
    {{ str }}
  </div>
</template>
<script setup lang="ts">
const str = "xxx";
</script>
<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background: #fff;
  h2 {
    color: red;
  }
}
</style>
