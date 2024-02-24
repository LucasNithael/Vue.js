import { createApp } from 'vue'
import App from './App.vue'
import ContadoresComponent from './ContadoresComponent.vue'

const app = createApp(App);

app.component('app-contadores', ContadoresComponent)

app.mount('#app')