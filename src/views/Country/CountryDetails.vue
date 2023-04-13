<template>
  <section class="details-section">
    <div class="details-section__img">
      <img :src="flags.png" :alt="flags.alt" />
    </div>
    <div class="details-section__information">
      <div class="details-section__details">
        <h2 class="details-section__title">
          {{ selectedCountry.name.common }}
        </h2>
        <div
          class="details-section__detail"
          v-for="detail in details"
          :key="detail.title"
        >
          <span>{{ detail.title }}:</span><span>{{ detail.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useStore } from "vuex";
import { DETAILS } from "@/constants/country.constants";
import { useArray } from "@/hooks/useArray";
const store = useStore();
const { selectedCountry } = store.state.country;
const { flags } = selectedCountry;
const details = DETAILS;
const { splitArray } = useArray();

function retrieveSelectedCountry() {
  Object.keys(details).forEach((key) => {
    if (Array.isArray(selectedCountry[key])) {
      details[key].value = selectedCountry[key].join();
    } else {
      switch (key) {
        case "languages":
          details[key].value = Object.values(selectedCountry[key]).join();
          break;
        case "name":
          details[key].value = selectedCountry[key].common;
          break;
        case "currencies":
          const currencies = Object.keys(selectedCountry[key]);
          currencies.forEach((currencie) => {
            details[key].value = !!details[key].value
              ? selectedCountry[key][currencie].name
              : `${details[key].value}, ${selectedCountry[key][currencie].name}`;
          });
          break;
        default:
          details[key].value = selectedCountry[key];
          break;
      }
    }
  });
}
retrieveSelectedCountry();
</script>
<style lang="scss" scoped>
.details-section {
  @include flexible(column, center, center);
  font-size: 1.2rem;
  height: 100%;
  @include breakpoint(md) {
    flex-direction: row;
  }

  &__img {
    @include flexible();
    width: 100%;
    img {
      width: 100%;
      aspect-ratio: 4/3;
      @include breakpoint(lg) {
        max-width: 500px;
      }
    }
  }
  &__information {
    @include flexible(row, center);
    width: 100%;
    padding: 3.5rem 0;
    @include breakpoint(lg) {
      @include flexible(column);
    }
  }
  &__details {
    @include flexible(column, unset, unset, 1.4rem);
    padding: 3.5rem 0;
  }
  &__detail {
    span:first-child {
      font-weight: bold;
      margin-right: 5px;
    }
  }
  &__title {
    @include typography(h2);
  }
}
</style>
