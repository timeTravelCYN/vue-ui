<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'button-group',
    mounted () {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`g-button-group 的子元素应该全是 g-button, 你写的是 div`)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.g-button-group {
  display: inline-flex;
  > .g-button {
    border-radius: 0;
    margin-left: -1px;
    &:not(:first-child) {
      margin-left: 0;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-bottom-right-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>