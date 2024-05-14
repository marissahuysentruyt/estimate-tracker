<script setup lang="ts">
  import { ref } from 'vue';
  import type { Ref } from 'vue';
  import InputItem from './InputItem.vue';
  import SubmitButton from './SubmitButton.vue';

  let formSubmitted = ref(false);
  const setFormSubmitted = (currentState: Ref<boolean>) => {
    formSubmitted.value = !currentState.value;
    return formSubmitted;
  }

  const inputValueArray: string[] = [];

  const getInputValues = (inputs: NodeListOf<HTMLInputElement>): void => {
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      const value = inputs[i].value;
      if (!inputValueArray.includes(value)) {
        inputValueArray.push(input.value)
      } else {
        return;
      }
    }
    setFormSubmitted(formSubmitted);
  }

  // this `any` is referencing each of the InputItems
  const handleInputChanges = (inputElement: any) => {
    inputValueArray.push(inputElement.srcElement?.value)
  }
</script>

<template>
  <form @submit.prevent>
    <InputItem label="Task" name="task" @change="handleInputChanges" />
    <InputItem label="Estimated Time" name="estimation" @change="handleInputChanges" />
    <InputItem label="Description" name="task-description" @change="handleInputChanges"/>
    <InputItem label="Actual Time" name="actual-time" @change="handleInputChanges"/>

    <SubmitButton buttonText="Save" @click="getInputValues" />
  </form>

  <h2>Your Estimates</h2>
  <ul v-if="formSubmitted">
    <template v-for="inputValue in inputValueArray" :key="inputValue.indexOf">
      <li>
        {{ inputValue }}
      </li>
    </template>
  </ul>
</template>
