<script setup lang="ts">
  import InputItem from './InputItem.vue';
  import SubmitButton from './SubmitButton.vue';

  const inputValueArray: string[] = [];

  const getInputValues = (inputs: NodeListOf<HTMLInputElement>): void => {
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      inputValueArray.push(input.value)
    }
  }

  const handleSubmit = (): string[] => {
    const inputValues = document.querySelectorAll('input');
    getInputValues(inputValues);
    return inputValueArray;
  }
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <InputItem label="Task" name="task" />
    <InputItem label="Estimated Time" name="estimation"/>
    <InputItem label="Description" name="task-description"/>
    <InputItem label="Actual Time" name="actual-time"/>

    <SubmitButton buttonText="Save" />
  </form>

  <!-- <p>{{ value }}</p> -->
</template>
