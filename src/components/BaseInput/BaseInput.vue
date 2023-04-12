<template>
  <label class="base-input__label" :for="name" v-if="label">
    {{ label }}
  </label>
  <div class="base-input__container">
    <div class="base-input__icon" v-if="hasIcon">
      <slot name="icon">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </slot>
    </div>
    <input
      v-model="model"
      class="base-input__input"
      :type="type"
      :disabled="isdisabled"
      :placeholder="placeholder"
      :name="name"
      @input="valueEmitter('input')"
      @change="valueEmitter('change')"
    />
  </div>
</template>
<script setup>
import { defineProps, defineEmits, ref } from "vue";
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
});
const emit = defineEmits(["input", "change"]);
const model = ref("");
function valueEmitter(type) {
  emit(type, model.value);
}
</script>
<style lang="scss" scoped>
.base-input {
  &__container {
    display: flex;
    background-color: var(--secondary-coor);
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.16);
    color: var(--text-color);
    border-radius: 5px;
  }
  &__input {
    font-family: "NunitoSans";
    border: none;
    border-radius: inherit;
    padding: 1rem;
    width: 100%;
    background-color: inherit;
    color: inherit;
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
