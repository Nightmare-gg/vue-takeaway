<template>
    <div class="header">
        <van-icon class="icon" name="arrow-left" @click="router.back()" />
        <div>{{ props.title }}</div>
        <div class="edit" v-if="props.edit" @click="handleEdit">
            {{ store.state.isEdit ? "编辑" : "完成" }}
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
import { Toast } from 'vant';

const router = useRouter()
const store = useStore()
const props = defineProps({
    title: String,
    edit: Boolean
})
const handleEdit = () => {
    if (store.state.cartList.length) {
        store.commit('edit')
        store.commit('changeDelete')
    } else {
        Toast.fail("请添加商品到购物车")
    }
}
</script>
<style scoped lang="less">
.header {
    background-color: #fff;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d7d7d7;

    .edit {
        font-size: 16px;
        position: absolute;
        right: 15px;
        font-weight: normal;
    }

    .icon {
        position: absolute;
        left: 10px;
    }
}
</style>