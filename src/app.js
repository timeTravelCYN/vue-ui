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

import chai from 'chai'

const expect = chai.expect

// 单元测试
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  button.$mount(div)
  let useElement = button.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  button.$mount(div)
  let useElement = button.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const gButton = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  gButton.$mount()
  gButton.$on('click', function () {
    expect(1).to.eq(1)
  })
  let button = gButton.$el
  button.click()
  gButton.$el.remove()
  gButton.$destroy()
}

