<template>
    <div class="login">
        <Header title="登录" />
        <div class="img">米团</div>
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="user" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="pass" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
            <div style="margin: 16px">
                <van-button round block type="info" native-type="submit" color="#ffc400">
                    登录
                </van-button>
                <van-button round block type="info" color="#ffc400" class="register" @click="toRegister">
                    去注册
                </van-button>
            </div>
        </van-form>

    </div>
</template>

<script setup>
import Header from '../../components/Header.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const router = useRouter()
const username = ref('')
const password = ref('')
const toRegister = () => {
    router.push('./register')
}


const onSubmit = () => {

}
</script>
<style scoped lang="less">
.login {
    .img {
        width: 200px;
        height: 200px;
        background-color: #ffc400;
        font-size: 80px;
        border-radius: 40px;
        text-align: center;
        line-height: 200px;
        margin: 20px auto;
    }

    .register {
        margin-top: 20px;
    }
}
</style>