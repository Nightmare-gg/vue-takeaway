<template>
    <div class="register">
        <Header title="注册" />
        <div class="img">米团</div>
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="user" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="pass" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
            <div style="margin: 16px">
                <van-button round block type="info" native-type="submit" color="#ffc400">
                    注册
                </van-button>
                <van-button round block type="info" color="#ffc400" class="register" @click="toLogin">
                    去登录
                </van-button>
            </div>
        </van-form>

    </div>
</template>

<script setup>
import Header from '../../components/Header.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { Toast } from 'vant'

const router = useRouter()
const username = ref('')
const password = ref('')
const toLogin = () => {
    router.push('./login')
}


const onSubmit = (value) => {
    if (localStorage.userInfo) {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo["user"] === value["user"]) {
            Toast("该用户已存在");
            return
        }
    } else {
        register(value)
    }
}
// 将数据存储在本地
const register = (value) => {
    localStorage.setItem("userInfo", JSON.stringify(value));
    Toast("注册成功")
    toLogin()
}
</script>
<style scoped lang="less">
.register {
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