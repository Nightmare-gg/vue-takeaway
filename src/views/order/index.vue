<template>
    <div class="order">
        <Header title="订单" />
        <div class="content">
            <van-tabs color="#ffc400">
                <van-tab v-for="(item, index) in tabData" :title="item">
                    <div v-for="(i, index) in store.state.orderListEnd"
                        v-if="item === '全部' && store.state.orderListEnd.length">
                        <van-card :num="i.num" :price="i.price" :title="i.title" :thumb="i.pic" />
                    </div>
                    <div v-else>
                        <Empty />
                    </div>
                </van-tab>
            </van-tabs>

        </div>
        <Footer />
    </div>
</template>
    
<script setup>
import Footer from '../../components/Footer.vue'
import Header from '../../components/Header.vue'
import Empty from '../../components/Empty.vue'
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const tabData = ref(['全部', '交易完成', '待付款', '待发货', '已发货'])

</script>
<style scoped lang="less">
.order {
    display: flex;
    flex-flow: column;
    height: 100%;
    font-size: 12px;

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>