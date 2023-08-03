<template>
	<el-button type="primary">Primary</el-button>
	<el-pagination :page-size="100" layout="total, prev, pager, next" :total="1000" />
	<p class="aa">测试中</p>
	<SvgIcon name="phone" color="pink" width="40px" height="40px" />
</template>
<script setup lang="ts">
import { getLogin, getUserInfo } from '@/api/user/index'
import { onMounted } from 'vue';
const getLoginFunc = async ()=> {
	await getLogin({username: 'admin',password: '111111'})
}
const getUserInfoFunc = async ()=> {
	await getUserInfo()
}
onMounted(() => {
	getLoginFunc()
	getUserInfoFunc()
})

</script>
<style lang="scss" scoped>
.aa {
	color: $base-color;
}
</style>
