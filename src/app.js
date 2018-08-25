import Vue from 'vue'
import Button from '../package/button'
import Icon from '../package/common/icon'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon)

new Vue({
  el: '#app'
});