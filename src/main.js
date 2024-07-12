import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Bootstrap 관련 JavaScript와 CSS 로딩
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Vue DatePicker 불러오기
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

// vue-loading-overlay 불러오기
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';


// Auth 정보 로딩
store.dispatch('loadAuth');

const app = createApp(App);

// VueDatePicker 전역 컴포넌트로 등록
app.component('VueDatePicker', VueDatePicker);

// Loading 전역 컴포넌트로 등록
app.component('Loading', Loading);

// 애플리케이션에 store와 router 사용 설정
app.use(store).use(router).mount('#app');
