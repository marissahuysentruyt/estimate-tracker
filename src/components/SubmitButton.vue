<script setup lang="ts">
  defineProps<{
    buttonText: string;
  }>();
</script>

<template>
  <button type="submit">
    {{ buttonText }}
  </button>
</template>
