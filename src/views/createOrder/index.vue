<template>
    <div class="create-order">
        <Header title="生成订单" />
        <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
        <div class="content">
            <div v-for="(item, index) in store.state.orderList">
                <van-card :num="item.num" :price="item.price" :title="item.title" :thumb="item.pic" />
            </div>
        </div>
        <div class="pay-wrap">
            <div>
                <span>商品金额:</span>
                <span class="price">￥{{ totalPrice }}</span>
            </div>
            <van-button type="primary" class="pay-btn" color="#ffc400" @click="handleCreateOrder">支付</van-button>
        </div>
    </div>
</template>

<script setup>
import Header from '../../components/Header.vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { Dialog } from 'vant';
import { useRouter, useRoute } from 'vue-router';

const store = useStore()
const router = useRouter()
const route = useRoute()
const tel = ref("13878654321")
const name = ref("李四")
const totalPrice = ref(0)
const onEdit = () => {
    router.push('/address')
}
const initPrice = () => {
    let price = 0
    if (store.state.orderList.length) {
        store.state.orderList.forEach((item) => {
            price += item.num * item.price
        })
    }
    totalPrice.value = price
}
// 初始化地址
const initUser = () => {
    store.state.userAddress.forEach((item) => {
        if (item.isDefault) {
            tel.value = item.tel
            name.value = item.name
        }
    })
}

const handleCreateOrder = () => {
    Dialog({
        title: "提示",
        message: "订单已生成",
    }).then(() => {
        // 要和购物车联系起来： 支付以后的商品在购物车中不再展示
        let newList = store.state.cartList.filter((item) => {
            return !route.query.list.includes(item.id + "")
        })
        store.commit("delete", newList)
        store.commit("orderListEd")
        router.push('/order')
    })
}

onMounted(() => {
    initPrice()
    initUser()
})

</script>
<style scoped lang="less">
.create-order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }

    .pay-wrap {
        padding: 10px 0;
        width: 100%;
        background: #fff;
        border-top: 1px solid #e9e9e9;
        text-align: center;

        >div {
            display: flex;
            justify-content: space-between;
            padding: 0 5%;
            margin: 10px 0;
            font-size: 14px;

            span:nth-child(2) {
                color: red;
                font-size: 18px;
            }
        }

        .pay-btn {
            width: 90%;
        }
    }
}
</style>