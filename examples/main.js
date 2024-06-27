import Vue from 'vue'
import App from './App.vue'
import '../components/css/index.scss'
import Components from '../components/lib';

Vue.use(Components);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
