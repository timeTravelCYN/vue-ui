import Vue from 'vue'
import Button from '../package/button'
import Icon from '../package/common/icon'
import ButtonGroup from '../package/button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    load1: true
  }
});