<template>
    <div class="home">
        <div class="content">
            <div class="header">
                <div class="text">外卖</div>
                <div class="location">
                    <van-icon name="location-o" />
                    <span>广州</span>
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
    
<script setup>
import Footer from '../../components/Footer.vue'
</script>
<style scoped lang="less">
.home {
    display: flex;
    flex-flow: column;
    height: 100%;

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
    }
}
</style>