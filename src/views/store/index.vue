<template>
    <div class="storeDetails">
        <Header title="店铺"></Header>
        <div class="content ">
            <div class="img"></div>
            <div class="foodSort">
                <div class="name">
                    {{ title }}
                    <img :src="img" alt="" class="store-img">
                </div>
                <van-tabs color="#ffc400">
                    <van-tab v-for="(item, index) in storeData" :key="index" :title="item.name">
                        <food-list :index="index" :foodData="item.data" />
                    </van-tab>
                </van-tabs>

            </div>
        </div>
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" dot />
            <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.state.cartList.length" @click="goCart" />
            <van-action-bar-button type="warning" text="加入购物车" @click="handleAddCart" />
            <van-action-bar-button type="danger" text="立即购买" @click="goBuy" />
        </van-action-bar>

    </div>
</template>

<script setup>
import FoodList from './childComp/FoodList.vue'
import { reactive, ref, onMounted } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Header from '../../components/Header.vue';
import { Toast } from 'vant';
// import axios from 'axios'
import { getApiStoreData } from '../../api/api';

const title = ref("鱼拿酸菜鱼")
const img = ref("https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440")
const storeData = ref([])
const store = useStore()
const router = useRouter()
const handleAddCart = (type) => {
    const newList = store.state.cartList || []
    storeData.value.forEach((item) => {
        item.data.items?.forEach((item) => {
            item.children.forEach((item) => {
                if (item.num > 0) {
                    newList.push(item)
                }
            })
        })
    })
    if (newList.length === 0) {
        Toast("请选择商品")
        return
    }
    store.commit('addcart', newList)
    type === "buy" ? goCart() : ""
}

const goCart = () => {
    router.push('/cart')
}

const goBuy = () => {
    handleAddCart("buy")
}

const getStoreData = () => {
    getApiStoreData().then((res) => {
        // console.log(res);
        storeData.value = res
    })
    // axios.get('/home/getStoreData').then((res) => {
    //     console.log(res);
    //     const { storeDatas, code } = res.data;
    //     if (code == 200) {
    //         storeData.value = storeDatas
    //     }
    // })
}

onMounted(() => {
    getStoreData()
})

</script>
<style scoped lang="less">
.storeDetails {
    display: flex;
    flex-direction: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;

        .img {
            background: url("../../assets/yuna.jpg") no-repeat center/cover;
            width: 100%;
            height: 150px;
        }

        .foodSort {
            height: 500px;
            border-radius: 20px 20px 0 0;
            background-color: #fff;
            margin-top: -30px;

            .sort {
                margin-top: -10px;
            }

            .name {
                display: flex;
                padding: 20px;
                justify-content: space-between;

                .store-img {
                    width: 80px;
                    height: 80px;
                    border-radius: 10px;
                    margin-top: -30px;
                }
            }
        }
    }
}
</style>