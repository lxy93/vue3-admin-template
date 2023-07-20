<template>
    <svg :style="{width,height}">
        <use :xlink:href="prefix+name" :fill="color"></use>
    </svg>
</template>

<script lang='ts' setup>
import {  } from 'vue'
defineProps({
    // xlink:href属性值的前缀
    prefix: {
        type: String,
        default: '#icon-'
    },
    // svg名称
    name: String,
    // svg颜色
    color: {
        type: String,
        default: '#333'
    },
    // svg宽度
    width: {
        type: String,
        default: '16px'
    },
    // svg高度
    height: {
        type: String,
        default: '16px'
    }
})
</script>

<style lang='' scoped>

</style>