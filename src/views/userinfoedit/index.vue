<template>
    <Header title="账号管理" />
    <div>
        <van-field v-model="name" label="昵称" placeholder="请输入昵称" />
        <van-field v-model="sign" label="个性签名" placeholder="请输入个性签名" disabled="" />
        <van-field v-model="pass" label="密码" placeholder="请输入密码" />
    </div>
    <van-button type="primary" color="#ffc400" round block class="save-btn" @click="save">保存</van-button>
    <van-button type="primary" color="#ffc400" round block class="save-btn" @click="logOut">退出登录</van-button>
</template>

<script setup>
import Header from '../../components/Header.vue';
import { ref } from 'vue'
import { Toast } from 'vant'
import { useRouter } from 'vue-router';

let name = ref('')
let sign = ref('往前看，别回头')
let pass = ref('')
const router = useRouter()

const save = () => {
    if (name.value && pass.value) {
        let userInfo = JSON.parse(localStorage.userInfo);
        let newUserInfo = {
            user: name.value || userInfo.name,
            pass: pass.value || userInfo.pass
        }
        localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
        Toast("修改成功");
        router.push('/mine');
    } else {
        Toast("请输入内容")
    }
}

const logOut = () => {
    localStorage.removeItem("isLogin");
    Toast("退出成功");
    router.push("./login")
}
</script>
<style scoped lang="less">
.save-btn {
    width: 80%;
    margin: 20px auto;
}
</style>