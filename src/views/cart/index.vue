<template>
    <div class="cart">
        <div class="content">
            <div>购物车</div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '../../components/Footer.vue'
</script>
<style scoped lang="less">
.cart {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>