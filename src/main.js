import Vue from 'vue'
import App from './App'

import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'

sync(store, router)
// Global Object for DatePicker (initialize with the data from database)
window.dates = {
  newplan: [[{value: '2017-03-04'}], [{value: '2017-03-04'}], [{value: '2017-03-04'}], [{value: '2017-03-04'}]],
  adopt: [[{value: '2007-03-04'}], [{value: '2007-03-04'}], [{value: '2007-03-04'}], [{value: '2007-03-04'}]],
  isale: [[{value: '2007-03-04'}], [{value: '2007-03-04'}], [{value: '2007-03-04'}]],
  newcross: [[{value: '2007-03-04'}], [{value: '2007-03-04'}]],
  msa: [[{value: '2007-03-04'}], [{value: '2007-03-04'}], [{value: '2007-03-04'}], [{value: '2007-03-04'}]],
  nissay: [[{value: '2007-03-04'}], [{value: '2007-03-04'}], [{value: '2007-03-04'}], [{value: '2007-03-04'}]]
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
