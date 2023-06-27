import { createStore } from "vuex";

export default createStore({
    state: {
        // 购物车数据
        cartList: [],
        // 确定header组件 点击编辑时 底部删除显示
        isDelete: true,
        // 控制显示编辑还是完成
        isEdit: true,
        // 结算订单列表
        orderList: [],
        // 用户地址
        userAddress: [
            {
                id: 1001,
                name: 'jason',
                tel: '15874859686',
                province: '广东省',
                city: '深圳市',
                county: '南山区',
                addressDetail: '深圳湾',
                isDefault: true,
                areaCode: '110101',
            },
            {
                id: 1002,
                name: 'allen',
                tel: '15874859685',
                province: '湖北省',
                city: '武汉市',
                county: '武昌区',
                addressDetail: '黄鹤楼',
                isDefault: false,
                areaCode: '110101',
            },
        ],
        orderListEnd: []
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
        },
        pay(state, val) {
            state.orderList = val
        },
        orderListEd(state) {
            state.orderListEnd = state.orderListEnd.concat(state.orderList)
        }
    },
    actions: {}
})