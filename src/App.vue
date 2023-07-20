<template>
	<el-button type="primary">Primary</el-button>
	<el-pagination
    :page-size="100"
    layout="total, prev, pager, next"
    :total="1000"
  />
  <p class="aa">测试中</p>
  <SvgIcon name="phone" color="pink" width="40px" height="40px" />
</template>
<script setup lang="ts">
// import SvgIcon from '@/components/SvgIcon.vue'
</script>
<style lang="scss" scoped>
.aa{
  color: $base-color;
}
</style>
