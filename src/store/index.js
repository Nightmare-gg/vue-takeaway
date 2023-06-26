import { createStore } from "vuex";

export default createStore({
    state: {
        // 购物车数据
        cartList: [],
    },
    mutations: {
        addcart(state, val) {
            state.cartList = val
        }
    },
    actions: {}
})