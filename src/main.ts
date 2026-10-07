import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vReveal, vCountUp } from './directives/scroll'

createApp(App)
  .directive('reveal', vReveal)
  .directive('count-up', vCountUp)
  .mount('#app')
