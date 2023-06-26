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
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
    
<script setup>
import Footer from '../../components/Footer.vue'
import { reactive } from 'vue';
let big_sort = reactive(
    [
        {
            name: "美食",
            icon: "icon-meishi",
        },
        {
            name: "甜点饮品",
            icon: "icon-tiandian",
        },
        {
            name: "超市便利",
            icon: "icon-chaoshigouwu",
        },
        {
            name: "生鲜果蔬",
            icon: "icon-shengxian-ganju",
        },
        {
            name: "买药",
            icon: "icon-zhichiyiyuanyaodian",
        },
    ])
let small_sort = reactive(
    [
        {
            name: "午餐",
            icon: "icon-wucan",
        },
        {
            name: "买酒",
            icon: "icon-jiu",
        },
        {
            name: "新鲜水果",
            icon: "icon-xinxianguoshu_xinxianshuiguopingguo",
        },
        {
            name: "汉堡披萨",
            icon: "icon-hanbaopisa",
        },
        {
            name: "休闲饮品",
            icon: "icon-xiuxianyinpin",
        },
        {
            name: "夜宵",
            icon: "icon-yexiao",
        },
        {
            name: "吐司",
            icon: "icon-tusi",
        },
        {
            name: "跑腿",
            icon: "icon-paotuiAPP",
        },
        {
            name: "美人佳丽",
            icon: "icon-kouhong",
        },
        {
            name: "全部分类",
            icon: "icon-fenlei",
        },
    ])
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
        }
    }
}
</style>