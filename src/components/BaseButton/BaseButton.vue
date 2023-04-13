<template>
  <button class="base-btn" :style="customStyle" :type="type">
    <slot name="icon"> </slot>
    <p class="base-btn--text" v-if="title">{{ title }}</p>
  </button>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  customStyle: {
    type: Object,
    required: false,
  },
  type: {
    type: String,
    required: false,
    default: "button",
  },
});
</script>
<style lang="scss" scoped>
.base-btn {
  display: inline-flex;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 0.3rem;
  padding: 0.3rem 1rem;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.16);
  @include typography(body);
  @include themed() {
    background-color: t($secondary);
    color: t($text);
  }
  @include breakpoint(lg) {
    @include typography(body, lg);
  }

  &--text {
    margin-left: 10px;
  }
}
</style>
