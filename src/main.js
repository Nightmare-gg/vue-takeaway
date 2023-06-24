import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
import 'amfe-flexible';
import router from './router/index'
import { Button } from 'vant';

const app = createApp(App)
app.use(router).use(Button)
app.mount('#app')
