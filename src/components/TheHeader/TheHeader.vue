<template>
  <header class="header">
    <h2 class="header__title">Where in the world?</h2>
    <baseButton
      :title="ModeButton.title"
      :customStyle="ModeButton.style"
      @click="changeMode"
    >
      <template #icon>
        <font-awesome-icon :icon="modeIcon" />
      </template>
    </baseButton>
  </header>
</template>
<script setup>
import baseButton from "../BaseButton/BaseButton.vue";
import { ref, reactive } from "vue";
let isDarkMode = ref(false);
let ModeButton = reactive({
  title: "Light Mode",
  style: {
    boxShadow: "none",
    padding: 0,
  },
});
const modeIcon = reactive(["far", "moon"]);
function changeMode() {
  isDarkMode.value = !isDarkMode.value;
  const root = document.getElementsByTagName("html")[0];
  if (isDarkMode.value) {
    ModeButton.title = "Dark Mode";
    modeIcon[0] = "fas";
    root.classList.add("theme--dark");
    root.classList.remove("theme--light");
  } else {
    ModeButton.title = "Light Mode";
    modeIcon[0] = "far";
    root.classList.add("theme--light");
    root.classList.remove("theme--dark");
  }
}
</script>
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
