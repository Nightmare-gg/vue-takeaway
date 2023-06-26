<template>
    <div v-for="(item, index) in props.navList" :key="index">
        <nav-list-item :itemContent="item" />
    </div>
</template>

<script setup>
import NavListItem from './NavListItem.vue';
const props = defineProps({
    navList: {
        type: Array,
        default: []
    }
})
</script>
<style scoped></style>