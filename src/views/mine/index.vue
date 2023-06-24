<template>
    <div class="mine">
        <div class="content">
            <div>个人信息</div>

        </div>
        <Footer />
    </div>
</template>
    
<script setup>
import Footer from '../../components/Footer.vue'
</script>
<style scoped lang="less">
.mine {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>