import { createApp } from 'vue'
import App from './App.vue'
import ContadorComponent from './ContadorComponent.vue'

const app = createApp(App);

app.component('app-component', ContadorComponent)

app.mount('#app')