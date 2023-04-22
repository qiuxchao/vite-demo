import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './routes.js';
import App from './App.vue';

import './index.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');
