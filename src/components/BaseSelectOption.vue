<template>
  <select
    class="base-select-option__select"
    v-model="selectedOption"
    @change="selectOption"
  >
    <option
      class="base-select-option__option"
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :disabled="option.disabled"
      :selected="option.selected"
      :lable="option.label"
    ></option>
  </select>
</template>
<script setup>
import { defineProps, ref } from "vue";
const props = {
  options: {
    type: Array,
    required: true,
    validate: () => {
      console.log(validate);
    },
  },
};
const selectedOption = ref("");
function selectOption() {}
</script>
<style lang="scss" scoped>
.base-select-option {
  &__select {
    padding: 1rem;
    border: none;
    border-radius: 5px;
    background-color: var(--secondary-coor);
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.16);
    color: var(--text-color);
    min-width: 14rem;
  }
  &__option {
    background-color: var(--secondary-coor);
  }
}
</style>
