
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store/index'
import suneditor  from 'suneditor'
import 'suneditor/dist/css/suneditor.min.css'
import 'bootstrap'
import './bootstrap'
import 'material-icons/iconfont/material-icons.css'
import VueWaveSurfer from 'vue-wave-surfer'



createApp(App).use(store).use(router).use(VueWaveSurfer).use(suneditor).mount('#app')
