import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import objPlugins from '@/plugins/obj';
import funcPlugins from '@/plugins/func';
import person from '@/plugins/person';

const app = createApp(App);
app.use(objPlugins, { name: '짐코딩' });
app.use(funcPlugins);
app.use(person, { name: '홍길동' });
app.use(router);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

// console.log('MODE: ', import.meta.env.MODE); //현재 구동되는 앱이 개발모드 vs. 다른 모드
// console.log('BASE_URL: ', import.meta.env.BASE_URL);
// console.log('PROD: ', import.meta.env.PROD); //프로덕션모드라면 true, 아니면 false
// console.log('DEV: ', import.meta.env.DEV); //개발모드라면 true, 아니면 false
// console.log('VITE: ', import.meta.env.VITE_APP_API_URL);
