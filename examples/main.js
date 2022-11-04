import Vue from 'vue'
import App from './App.vue'
// import alUi from '../packages/index'
import alUl from '../lib/al-form-validate.umd'
Vue.config.productionTip = false
// import './styles/al-form.css'
Vue.use(alUl)
new Vue({
  render: h => h(App)
}).$mount('#app')
