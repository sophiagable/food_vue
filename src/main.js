// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios' //載入 axios
import VueAxios from 'vue-axios' //載入 vue-axios
 
import App from './App'
import router from './router'

import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
import VueSweetalert2 from 'vue-sweetalert2';

//vue-event-calendar
import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'en',weekStartOn:1}) //locale can be 'zh' , 'en' , 'es', 'pt-br', 'ja', 'ko', 'fr', 'it', 'ru', 'de', 'vi'


Vue.config.productionTip = false
Vue.use(VueAxios, axios) //啟用 vue-axios, axios
// Vue.use(Datetime)
// Vue.component('datetime', Datetime);

// time picker
Vue.use(VueCtkDateTimePicker)
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker); 

// sweet alert style with bootswatch
const options = {
  confirmButtonClass: 'btn btn-primary m-1',
  cancelButtonClass: 'btn btn-secondary m-1',
  buttonsStyling: false, // remove swal style
}


Vue.use(VueSweetalert2,options);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

