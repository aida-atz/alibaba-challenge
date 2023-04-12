<template>
  <theHeader />
  <main>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>
<script setup>
import theHeader from "@/components/TheHeader/TheHeader.vue";
</script>
<style lang="scss" scoped>
main {
  flex-grow: 1;
}
.container {
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 1.4rem;
  @include breakpoint(sm) {
    max-width: 640px;
  }
  @include breakpoint(md) {
    max-width: 768px;
  }
  @include breakpoint(lg) {
    max-width: 1024px;
  }
  @include breakpoint(xl) {
    max-width: 1280px;
  }
  @include breakpoint(2xl) {
    max-width: 1536px;
  }
}
</style>
