<template>
  <header class="header">
    <h2 class="header__title">Where in the world?</h2>
    <slot></slot>
  </header>
</template>
<script setup></script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  @include themed() {
    background-color: t($secondary);
    color: t($text);
  }
  padding: 0 1rem;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.16);
  @include breakpoint(lg) {
    padding: 0.5rem 2rem;
  }
  &__title {
    @include typography(h2);
    @include breakpoint(lg) {
      @include typography(h2, lg);
    }
  }
}
</style>
