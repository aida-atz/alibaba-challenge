<template>
  <theHeader>
    <template #default>
      <baseButton
        :title="ModeButton.title"
        :customStyle="ModeButton.style"
        @click="isDarkMode = !isDarkMode"
      >
        <template #icon>
          <font-awesome-icon :icon="modeIcon" />
        </template>
      </baseButton>
    </template>
  </theHeader>
  <main>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>
<script setup>
import theHeader from "@/components/TheHeader/TheHeader.vue";
import baseButton from "@/components//BaseButton/BaseButton.vue";
import { ref, reactive, watch } from "vue";
let isDarkMode = ref(false);
let ModeButton = reactive({
  title: "Light Mode",
  style: {
    boxShadow: "none",
    padding: 0,
  },
});
const modeIcon = reactive(["far", "moon"]);
const root = document.getElementsByTagName("html")[0];

watch(isDarkMode, (value) => {
  localStorage.setItem("isDarkMode", value);
  if (value) setMode("dark");
  else setMode("light");
});
function setMode(mode) {
  root.className = "";
  if (mode == "dark") {
    ModeButton.title = "Dark Mode";
    modeIcon[0] = "fas";
    root.classList.add("theme--dark");
  } else if (mode == "light") {
    ModeButton.title = "Light Mode";
    modeIcon[0] = "far";
    root.classList.add("theme--light");
  }
}

function test() {
  if (localStorage.getItem("isDarkMode") === "true") {
    setMode("dark");
    isDarkMode.value = true;
  } else if (localStorage.getItem("isDarkMode") === "false") {
    setMode("light");
    isDarkMode.value = false;
  }
}
test();
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
  @include breakpoint(3xl) {
    max-width: 1700px;
  }
}
</style>
