<template>
    <div class="home">
        <div class="content">
            <!-- 头部 -->
            <div class="header">
                <div class="text">外卖</div>
                <div class="location">
                    <van-icon name="location-o" />
                    <span>广州</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <!-- 主体内容区域 -->
            <div class="main">
                <div class="main-bg">
                    <div class="search">
                        <input type="text">
                        <div class="search-text">搜索</div>
                    </div>
                    <div class="sort">
                        <div class="big-sort">
                            <div v-for="(item, index) in big_sort " :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                        <div class="small-sort">
                            <div v-for="(item, index) in small_sort " :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <van-tabs v-model:active="active">
                    <van-tab v-for="(item, index) in centent_nav_list" :title="item.tab" :key="index">
                        <nav-list :navList="item.data" />
                    </van-tab>
                </van-tabs>

            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
    
<script setup>
import Footer from '../../components/Footer.vue'
import NavList from './childComp/NavList.vue'
import { reactive, ref, onMounted } from 'vue';
// import axios from 'axios'
import { getApiHomeDate } from '../../api/api';
let active = ref(0)
let big_sort = ref([])
let small_sort = ref([])
let centent_nav_list = ref([])

const getHomeData = () => {
    getApiHomeDate().then((res) => {
        // console.log(res);
        big_sort.value = res.big_sort
        small_sort.value = res.small_sort
        centent_nav_list.value = res.centent_nav_list
    })
    // axios.get("/home/getHomeData").then((res) => {
    //     // console.log(res);
    //     const { code, homeData } = res.data;
    //     if (code == 200) {
    //         big_sort.value = homeData.big_sort
    //         small_sort.value = homeData.small_sort
    //         centent_nav_list.value = homeData.centent_nav_list
    //     }
    // })
}

onMounted(() => {
    getHomeData()
})
</script>
<style scoped lang="less">
.home {
    display: flex;
    flex-flow: column;
    height: 100%;
    font-size: 12px;

    .content {
        flex: 1;
        overflow-y: auto;

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 20px 40px 20px;
            background-image: linear-gradient(#ffc400, #fff);

            .text {
                font-size: 20px;
                font-weight: 600;
            }

            .location {
                font-size: 14px;

                span {
                    margin: 0 5px;
                }
            }
        }

        .main {
            margin-top: -30px;

            .main-bg {
                padding: 10px 20px 0 20px;
                border-radius: 30px 30px 0 0;
                background-image: linear-gradient(#fff, #f5f5f5);

                .search {
                    position: relative;

                    input {
                        width: 100%;
                        border: 1px solid #ffc400;
                        border-radius: 20px;
                        height: 30px;
                    }

                    .search-text {
                        position: absolute;
                        top: 1px;
                        right: -6px;
                        width: 50px;
                        height: 32px;
                        line-height: 32px;
                        background-color: #ffc400;
                        font-size: 14px;
                        text-align: center;
                        border-radius: 16px;
                    }
                }

                .sort {
                    padding: 20px 0;


                    .big-sort {
                        display: flex;

                        div {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            flex: 1;

                            .icon {
                                width: 50px;
                                height: 50px;
                                margin-bottom: 5px;
                            }
                        }
                    }

                    .small-sort {
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 20px;

                        div {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            width: 20%;

                            .icon {
                                width: 30px;
                                height: 30px;
                                margin: 10px;
                            }
                        }
                    }
                }
            }

            .van-tabs {
                padding: 0 20px 10px;
            }
        }
    }
}

/deep/.van-tabs__wrap {
    border-radius: 10px;
}
</style>