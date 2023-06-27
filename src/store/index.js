import { createStore } from "vuex";

export default createStore({
    state: {
        // 购物车数据
        cartList: [],
        // 确定header组件 点击编辑时 底部删除显示
        isDelete: true,
        // 控制显示编辑还是完成
        isEdit: true
    },
    mutations: {
        // 添加购物车
        addcart(state, val) {
            state.cartList = val
        },
        // 编辑按钮控制底部删除键显示与隐藏
        changeDelete(state) {
            state.isDelete = !state.isDelete
        },
        // 删除商品
        delete(state, value) {
            state.cartList = value
        },
        edit(state, val) {
            if (val) {
                state.isEdit = true
            } else {
                state.isEdit = !state.isEdit
            }
        }
    },
    actions: {}
})