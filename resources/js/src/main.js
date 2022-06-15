import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import '../../sass/Styles.scss'
import 'bootstrap'
import 'material-icons/iconfont/material-icons.css'
import VueWaveSurfer from 'vue-wave-surfer'

createApp(App).use(router).use(VueWaveSurfer).mount('#app')
