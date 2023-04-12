<template>
  <select
    class="base-select-option__select"
    :value="modelValue"
    @input="$emit('input', $event.target.value)"
  >
    <option
      class="base-select-option__option"
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :label="option.label"
    ></option>
  </select>
</template>
<script setup>
import { defineProps, ref, defineEmits } from "vue";
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});
defineEmits(["input"]);
const modelValue = ref();
</script>
<style lang="scss" scoped>
.base-select-option {
  &__select {
    padding: 1rem;
    border: none;
    border-radius: 5px;
    background-color: var(--secondary-color);
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.16);
    color: var(--text-color);
    min-width: 14rem;
  }
  &__option {
    background-color: var(--secondary-color);
  }
}
</style>
