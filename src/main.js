import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueScrollReveal from 'vue-scroll-reveal'
import VueSmoothScroll from 'vue2-smooth-scroll'
import VuePageTransition from 'vue-page-transition' 
import VueKonva from 'vue-konva'
import locale from 'element-ui/lib/locale/lang/en'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import store from '@/store'
import router from '@/route'

Vue.use(ElementUI, { locale })
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  dutation: 200,
  cleanup: true,
  scale: 1,
  distance: '32px',
  mobile: false
})
Vue.use(VueSmoothScroll)
Vue.use(VuePageTransition)
Vue.use(VueKonva)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
