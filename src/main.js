import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.less'
import 'amfe-flexible';
import router from './router/index'
import store from './store'

const app = createApp(App)
app.use(router).use(store)
app.mount('#app')
