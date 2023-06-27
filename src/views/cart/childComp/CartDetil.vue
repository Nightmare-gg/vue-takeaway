<template>
    <div class="cartDetail">
        <div class="content">
            <van-checkbox-group v-model="checked" @change="groupChange">
                <div v-for="(item, index) in store.state.cartList">
                    <ListItem :item="item" :handleChange="handleChange" :showCheckBox="true" />
                </div>
            </van-checkbox-group>
        </div>
        <van-submit-bar :price="allPrice" button-text="提交订单" @submit="onSubmit" class="submit-all" buttonColor="#ffc400">
            <van-checkbox v-model="submitChecked" checkedColor="#ffc400" @click="choseAll">全选</van-checkbox>
        </van-submit-bar>

    </div>
</template>

<script setup>
import ListItem from '../../../components/ListItem.vue';
import { useStore } from 'vuex'
import { reactive, ref } from 'vue';
import { onMounted } from 'vue';
import { computed } from 'vue';

const store = useStore()
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
    let countList = store.state.cartList.filter((item) => {
        return checked.value.includes(item.id)
    })
    let sum = 0
    countList.forEach((item) => {
        sum += item.num * item.price;
    })
    return sum * 100
})

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