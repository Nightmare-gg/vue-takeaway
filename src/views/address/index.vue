<template>
    <div class="address">
        <Header title="地址管理" />
        <van-address-list :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from '../../components/Header.vue';
import { useStore } from 'vuex';
import router from '../../router';

const list = ref([])
const store = useStore()
const init = () => {
    list.value = store.state.userAddress.map((item) => {
        return {
            id: item.id,
            name: item.name,
            tel: item.tel,
            address: `${item.province}${item.city}${item.adressDetail}`,
            isDefault: item.isDefault,
        }
    })
}
const onAdd = () => {
    router.push({
        path: "/addressedit",
        query: {
            type: "add"
        }
    })
}

const onEdit = (item) => {
    router.push({
        path: "/addressedit",
        query: {
            id: item.id,
            type: "edit"
        }
    })

}

onMounted(() => {
    init()
})
</script>
<style scoped lang="less">
/deep/ .van-button--danger {
    background-color: #ffc400;
    border-color: #ffc400;
}

/deep/ .van-switch--on {
    background-color: #ffc400;
}

/deep/ .van-radio__icon {
    display: none;
}
</style>