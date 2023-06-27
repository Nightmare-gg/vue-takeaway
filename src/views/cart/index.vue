<template>
    <div class="cart">
        <Header title="购物车" />
        <CartDetail v-if="isShow" />
        <Empty v-else />
        <Footer />
    </div>
</template>

<script setup>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue'
import Empty from '../../components/Empty.vue';
import CartDetail from './childComp/CartDetil.vue'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
let isShow = ref(true)

const init = () => {
    if (store.state.cartList.length === 0) {
        isShow.value = false
    }
}

onMounted(() => {
    init()
})

</script>
<style scoped lang="less">
.cart {
    display: flex;
    flex-flow: column;
    height: 100%;
    font-size: 12px;
}
</style>