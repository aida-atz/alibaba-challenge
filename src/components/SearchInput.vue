<template>
  <form @submit.prevent="search()">
    <div class="search-input">
      <base-input
        :placeholder="searchInput.placeholder"
        :name="searchInput.name"
        :customStyle="searchInput.customStyle"
        v-model="searchText"
      />
      <baseButton type="submit" class="search-input__btn">
        <template #icon>
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </template>
      </baseButton>
    </div>
  </form>
</template>
<script setup>
import baseInput from "@/components/BaseInput/BaseInput.vue";
import baseButton from "@/components/BaseButton/BaseButton.vue";
import { ref, defineEmits } from "vue";
const searchInput = {
  placeholder: "Search for a country ...",
  name: "search",
  customStyle: {
    borderRadius: "unset",
    boxShadow: "none",
  },
};
const emit = defineEmits(["search"]);
const searchText = ref("");
function search() {
  emit("search", searchText.value);
}
</script>
<style lang="scss" scoped>
.search-input {
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.16);
  background-color: var(--primary-color);
  border-radius: 5px;
  &__btn {
    box-shadow: none;
    order: -1;
    border-radius: unset;
    background-color: inherit;
    border-radius: 5px;
  }
}
</style>
