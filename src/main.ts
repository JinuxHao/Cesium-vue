import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import * as echarts from  'echarts'
import VueECharts from 'vue-echarts'
import DataVVue3 from '@kjgl77/datav-vue3'


const app = createApp(App)
app.component('v-chart', VueECharts)
app.use(DataVVue3)
app.use(router)
app.mount('#app')
