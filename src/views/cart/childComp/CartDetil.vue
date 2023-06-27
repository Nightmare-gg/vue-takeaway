<template>
    <div class="cartDetail">
        <div class="content">
            <van-checkbox-group v-model="checked" @change="groupChange">
                <div v-for="(item, index) in store.state.cartList">
                    <ListItem :item="item" :handleChange="handleChange" :showCheckBox="true" />
                </div>
            </van-checkbox-group>
        </div>
        <van-submit-bar :price="allPrice" button-text="结算" @submit="onSubmit" class="submit-all" buttonColor="#ffc400"
            v-if="store.state.isDelete">
            <van-checkbox v-model="submitChecked" checkedColor="#ffc400" @click="choseAll">全选</van-checkbox>
        </van-submit-bar>
        <div class="buy" v-else>
            <van-checkbox v-model="submitChecked" checkedColor="#ffc400" @click="choseAll">全选</van-checkbox>
            <div class="delete" @click="handleDelete">
                删除
            </div>
        </div>
    </div>
</template>

<script setup>
import ListItem from '../../../components/ListItem.vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { reactive, ref, onMounted, computed } from 'vue';
import { Toast } from 'vant';

const props = defineProps(["changeShow"])
const store = useStore()
const router = useRouter()
const checked = ref([]);
const submitChecked = ref(true)
const handleChange = (value, detail) => {
    store.state.cartList.map((item) => {
        if (item.id === detail.name) {
            item.num = value;
        }
    })
}

const init = () => {
    checked.value = store.state.cartList.map((item) => item.id);
}

const onSubmit = () => {
    if (checked.value.length) {
        store.commit("pay", updateData())
        router.push({
            path: "/createorder",
            query: {
                list: checked.value
            }
        })
    } else {
        Toast.fail("请选择要结算的商品！！！")
    }
}
// 底部全选
const choseAll = () => {
    if (checked.value.length !== store.state.cartList.length) {
        init()
    } else {
        checked.value = []
    }
}
// 商品前面的复选框
const groupChange = (result) => {
    // console.log(result);
    if (result.length === store.state.cartList.length) {
        submitChecked.value = true
    } else {
        submitChecked.value = false
    }
    checked.value = result
}
// 计算单价 vant中 submit以分为单位所以乘100
const allPrice = computed(() => {
    let countList = updateData()
    let sum = 0
    countList.forEach((item) => {
        sum += item.num * item.price;
    })
    return sum * 100
})

const updateData = (type) => {
    return store.state.cartList.filter((item) => {
        return type === "delete"
            ? !checked.value.includes(item.id)
            : checked.value.includes(item.id)
    })
}

// 删除商品
const handleDelete = () => {
    // 判断checked是否有值（是否有商品被选中）
    if (checked.value.length) {
        store.commit("delete", updateData("delete"))
        checked.value = []
        // 购物车中没有数据的时候
        if (!store.state.cartList.length) {
            props.changeShow()
            store.commit('edit', 'delete')
        }
    } else {
        Toast.fail("请选择要删除的商品");
    }
}

onMounted(() => {
    init()
})


</script>
<style scoped lang="less">
.cartDetail {
    font-size: 14px;
    flex: 1;
    position: relative;
    overflow-y: auto;
    padding: 20px 20px 55px;

    .submit-all {
        position: fixed;
        bottom: 48px;
    }

    .buy {
        position: fixed;
        bottom: 48px;
        right: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
        height: 50px;
        align-items: center;
        padding: 0 16px;
        box-sizing: border-box;

        .left {
            display: flex;
            align-items: center;
        }

        .delete {
            color: #fff;
            background-color: #ffc400;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            width: 110px;
            height: 40px;
            text-align: center;
            line-height: 40px;
        }
    }

    .content {
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
    }
}
</style>