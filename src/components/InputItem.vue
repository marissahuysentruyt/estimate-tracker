<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{
    label: string,
    name: string
  }>()

  const inputValue = ref(''); 
</script>

<template>
  <label>
    *{{ label }}:
    <input required type="text" :name="name" v-model="inputValue">
  </label>
</template>
