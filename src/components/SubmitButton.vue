<script setup lang="ts">
  defineProps<{
    buttonText: string;
  }>();

  import "../../node_modules/@spectrum-css/tokens/dist/index.css";
  import "../../node_modules/@spectrum-css/typography/dist/index.css";
// import "../../node_modules/@spectrum-css/icon/dist/index.css";
  import "../../node_modules/@spectrum-css/button/dist/index.css";
  import "../../node_modules/@spectrum-css/button/dist/index-base.css";
  import "../../node_modules/@spectrum-css/button/dist/themes/spectrum.css";
</script>

<template>
  <button type="submit" class="spectrum-Button spectrum-Button--outline spectrum-Button--sizeS spectrum-Button--secondary">
    <span class="spectrum-Button-label">{{ buttonText }}</span>
  </button>
</template>
