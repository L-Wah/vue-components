import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
// 引入Message插件
Vue.prototype.$message = Message;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
