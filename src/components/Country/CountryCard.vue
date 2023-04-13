<template>
  <div class="country-card">
    <div class="country-card--flag">
      <img :src="flags.png" :alt="flags.alt" />
    </div>
    <div class="country-card--container">
      <router-link
        event
        :to="{ name: 'details', params: { name } }"
        @click="selectCountry"
      >
        <h3 class="country-card--name">{{ name }}</h3>
      </router-link>
      <div class="country-card--details">
        <p>
          <span>Populaion:</span>
          <span>{{ population }}</span>
        </p>
        <p>
          <span>Region:</span>
          <span>{{ region }}</span>
        </p>
        <p>
          <span>Capital:</span>
          <span>{{ capital.join() }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  population: {
    type: Number,
    require: true,
  },
  region: {
    type: String,
    required: true,
  },
  capital: {
    type: [Array, undefined],
    required: true,
  },
  flags: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["select"]);
const { id } = props;
function selectCountry() {
  emit("select", id);
}
</script>
<style lang="scss" scoped>
.country-card {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.16);
      @include themed() {
      background-color: t($secondary);
    }
  margin: auto;
  &--flag {
    img {
      width: 100%;
      aspect-ratio: 4/2;
      border-radius: 5px 5px 0 0;
    }
  }
  &--container {
    padding: 2rem;
  }
  &--name {
    @include typography(h3);
    font-weight: 800;
    padding-bottom: 0.8rem;
    white-space: hidden;
  }
  &--details {
    span:first-child {
      font-weight: 800;
      margin-right: 5px;
    }
  }
}
</style>
