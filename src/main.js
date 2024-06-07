import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//bootstrap 관련 javaScript와 css 로딩
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')
