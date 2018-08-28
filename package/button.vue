<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    name: 'g-button',
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator: function (value) {
          return !(value !== 'left' && value !== 'right') ? true : 'left'
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }

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
    .loading {
      animation: spin 2s infinite linear;
    }
  }
</style>