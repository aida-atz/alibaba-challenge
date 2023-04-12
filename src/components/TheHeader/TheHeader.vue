<template>
  <header
    class="header"
    :class="{ 'dark-theme': isDarkMode, 'light-theme': !isDarkMode }"
  >
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
  if (isDarkMode.value) {
    ModeButton.title = "Dark Mode";
    modeIcon[0] = "fas";
  } else {
    ModeButton.title = "Light Mode";
    modeIcon[0] = "far";
  }
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: var(--secondary-color);
  padding: 0 1rem;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.16);
  &__title {
    @include typography(h2);
  }
}
</style>
