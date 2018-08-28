[TOC]

# vue 轮子之路



## `@click.native` 的本质

在组件上直接注册 `@click` 是不生效的， `vue` 官网提到了需要用 `@click.native` 来 [实现](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6) , 其实本质就是



```html
// 父组件
<div>
    <components @click="dosomething"></components>
</div>

// components
<div>
    <div @click="$emit('click')"></div>
</div>
```

