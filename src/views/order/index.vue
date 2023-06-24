<template>
    <div class="order">
        <div class="content">
            <div>订单</div>

        </div>
        <Footer />
    </div>
</template>
    
<script setup>
import Footer from '../../components/Footer.vue'
</script>
<style scoped lang="less">
.order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>