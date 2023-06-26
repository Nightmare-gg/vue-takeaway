<template>
    <div class="content-item">
        <div class="left">
            <!-- 动态数据前面要加: -->
            <img :src="item.pic" alt="" />
        </div>

        <div class="text">
            <div class="title">{{ item.title }}</div>
            <van-icon name="add-o" v-if="item.add" @click="handleAdd(item.id)" />
            <van-stepper v-model="item.num" @change="handleChange" :name="item.id" v-else />
        </div>

        <div class="price">￥{{ item.price }}</div>

    </div>
</template>

<script setup>
defineProps(["item", "handleAdd", "handleChange"])


</script>
<style scoped lang="less">
.content-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    height: 60px;

    .left {
        display: flex;
        align-items: center;

        img {
            width: 60px;
            height: 60px;
            border-radius: 10px;
            margin-right: 10px;
        }
    }

    .text {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        flex: 1;
        height: 100%;
        position: relative;

        .title {
            font-size: 16px;
            margin-bottom: 15px;
        }

        .van-icon {
            color: red;
            font-size: 20px;
            position: absolute;
            right: 4px;
            bottom: 4px;
        }
    }

    .price {
        font-size: 16px;
        font-weight: 600;
    }

}
</style>