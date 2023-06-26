<template>
    <div class="item" @click="toStore">
        <img :src="props.itemContent.pic" />
        <div class="item-right">
            <div class="title">{{ props.itemContent.title }}</div>
            <div class="sales">{{ props.itemContent.sales }}</div>
            <div class="price">{{ props.itemContent.price }}</div>
            <div class="label">
                <div v-for="(i, index) in props.itemContent.label" :key="index">
                    {{ i }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// 接收父组件传过来的数据
const props = defineProps({
    itemContent: {
        type: Object,
        defalut: {}
    }
})

// 跳转路由
const router = useRouter()
const toStore = () => {
    router.push('/store')
}
</script>
<style scoped lang="less">
.item {
    display: flex;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    margin: 10px 0;

    img {
        width: 120px;
        height: 120px;
        border-radius: 15px;
        margin-right: 20px;
    }

    .item-right {
        display: flex;
        flex-flow: column;
        justify-content: space-between;

        .title {
            font-size: 18px;
        }

        .label {
            display: flex;

            div {
                background-color: #ffc400;
                padding: 2px 5px;
                border-radius: 5px;
            }

            div:not(:first-child) {
                margin-left: 5px;
            }
        }
    }
}
</style>