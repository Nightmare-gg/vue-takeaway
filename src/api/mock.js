import Mock from 'mockjs'
import homeApi from './mockData/homeApi'
import storeApi from './mockData/storeApi'
// 拦截请求，响应数据
Mock.mock('/home/getHomeData', homeApi.getHomeData)
Mock.mock('/home/getStoreData', storeApi.getStoreData)