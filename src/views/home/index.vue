<template>
    <div class="home">
        <div class="content">主体内容</div>
        <Footer></Footer>
    </div>
</template>
    
<script setup>
import Footer from '../../components/Footer.vue'
</script>
<style scoped lang="less">
.home {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
    }
}
</style>