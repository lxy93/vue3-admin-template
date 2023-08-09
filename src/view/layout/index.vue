<template>
    <div class="container">
        <div class="slider"> 左</div>
        <div class="tabbar"> tabbar</div>
        <div class="main">main</div>
    </div>
</template>

<script setup lang="ts">
import {} from 'vue'
</script>

<style lang='scss' scoped>
.container{
    width: 100%;
    height: 100vh;
    .slider{
        width: $base-menus-width;
        height: 100vh;
        background: $base-menus-bg;
    }
    .tabbar{
        width: calc(100% - $base-menus-width);
        height: $base-tabbar-height;
        position: fixed;
        top: 0;
        left: $base-menus-width;
        background: pink;
    }
    .main{
        width: calc(100% - $base-menus-width);
        height: calc(100vh - $base-tabbar-height);
        background: green;
        position: fixed;
        left: $base-menus-width;
        top: $base-tabbar-height;
    }
}
</style>