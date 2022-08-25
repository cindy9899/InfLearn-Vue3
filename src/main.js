import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
// import globalComponents from '@/plugins/global-components';
import globalDirectives from '@/plugins/global-directives';
import dayjs from '@/plugins/dayjs';
const app = createApp(App);
// app.use(globalComponents);
app.use(globalDirectives);
app.use(dayjs);
app.use(router);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

// console.log('MODE: ', import.meta.env.MODE); //현재 구동되는 앱이 개발모드 vs. 다른 모드
// console.log('BASE_URL: ', import.meta.env.BASE_URL);
// console.log('PROD: ', import.meta.env.PROD); //프로덕션모드라면 true, 아니면 false
// console.log('DEV: ', import.meta.env.DEV); //개발모드라면 true, 아니면 false
// console.log('VITE: ', import.meta.env.VITE_APP_API_URL);
