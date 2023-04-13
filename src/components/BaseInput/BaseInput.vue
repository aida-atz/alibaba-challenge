<template>
  <label class="base-input__label" :for="name" v-if="label">
    {{ label }}
  </label>
  <div class="base-input__container">
    <div class="base-input__icon" v-if="hasIcon">
      <slot name="icon"> </slot>
    </div>
    <input
      :style="customStyle"
      :value="modelValue"
      class="base-input__input"
      :type="type"
      :disabled="isdisabled"
      :placeholder="placeholder"
      :name="name"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "text",
  },
  placeholder: {
    type: String,
    required: false,
  },
  isdisabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  label: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  hasIcon: {
    type: Boolean,
    required: false,
    default: false,
  },
  customStyle: {
    type: Object,
    required: false,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
});
defineEmits(["update:modelValue"]);
</script>
<style lang="scss" scoped>
.base-input {
  &__container {
    display: flex;
    border-radius: 5px;
    @include themed() {
      background-color: t($secondary);
      color: t($text);
    }
  }
  &__input {
    font-family: "NunitoSans";
    border: none;
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
    background-color: inherit;
    color: inherit;
    @include typography(body);
    @include breakpoint(lg) {
      @include typography(body, lg);
    }
    &::placeholder {
      color: inherit;
    }
  }
  &__icon {
    padding: 1rem;
    display: flex;
    align-items: center;
  }
}
</style>
