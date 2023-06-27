<template>
    <div class="food-list" v-if="index === 0">
        <van-tree-select v-model:main-active-index="data.activeIndex" height="88vw" :items="data.items"
            @click-nav="navClick">
            <template #content>
                <div class="item-bg" v-for="(item, index) in data.subItem">
                    <List-item :item="item" :handleAdd="handleAdd" :handleChange="handleChange" />
                </div>
            </template>
        </van-tree-select>

    </div>

    <div v-else>
        {{ foodData.content }}
    </div>
</template>

<script setup>
import ListItem from '../../../components/ListItem.vue';
import { reactive } from 'vue';

const props = defineProps({
    index: Number,
    foodData: Object
})
const data = reactive({
    activeIndex: 0,
    items: [],
    subItem: [],
})
// 初始化数据
const initData = () => {
    let newArry = [];
    props.foodData?.items?.forEach((item, index) => {
        newArry.push({
            text: item.text,
        });
        if (data.activeIndex === index) {
            data.subItem = item.children
        }
    });
    data.items = newArry
};
initData();

const navClick = (i) => {
    data.activeIndex = i
    initData()
}

const handleAdd = (id) => {
    data.subItem.forEach((item, index) => {
        if (item.id === id) {
            item.add = false;
            item.num += 1;
        }
    })
}

const handleChange = (value, detail) => {
    data.subItem.forEach((item) => {
        if (item.id === detail.name) {
            item.num = value;
        }
    })
    // console.log(data.subItem);
}
</script>
<style scoped lang="less">
.food-list {
    margin-top: 20px;

    .item-bg {
        padding: 10px;
    }
}

/deep/ .van-tree-select__item--active {
    color: #ffc400;
}

/deep/ .van-sidebar-item--select::before {
    background-color: #ffc400;
}
</style>