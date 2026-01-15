```yaml
title:
  zh-CN: 基本使用
  en-US: Basic Usage
```

## zh-CN

基本用法

---

## en-US

Basic usage

---

```vue
<template>
  <div>值：{{ value1 }}</div>
  <a-space>
    <a-color-picker v-model="value1" />
    <a-color-picker v-model="value2" />
    <a-color-picker defaultValue="#165DFF" showText disabledAlpha/>
  </a-space>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('')
const value2 = ref('#165DFF')
</script>
```
