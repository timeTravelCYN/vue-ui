<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    name: 'g-button',
    props: ['icon', 'iconPosition']
  }
</script>

<style scoped lang="scss">
  .g-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }
    > .icon {
      margin-right: .3em;
      order: 1;
    }
    > .content {
      order: 2;
    }
    &.icon-right {
      > .icon {
        margin: 0 0 0 .3em;
        order: 2
      }
      > .content {
        order: 1;
      }
    }
  }
</style>