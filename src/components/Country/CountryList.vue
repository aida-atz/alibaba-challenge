<template>
  <countryCard
    v-for="country in countries"
    :key="country.id"
    :population="country.population"
    :region="country.region"
    :name="country.name.official"
    :flags="country.flags"
    :capital="country.capital"
    :id="country.id"
    @select="findSelectedCountry"
  />
</template>
<script setup>
import { defineProps, defineAsyncComponent, defineEmits } from "vue";

const countryCard = defineAsyncComponent(() =>
  import("@/components/Country/CountryCard.vue")
);
const props = defineProps({
  countries: {
    type: Array,
    required: false,
  },
});
const emit = defineEmits(["select"]);
const { countries } = props;
function findSelectedCountry(id) {
  emit("select", id);
}
</script>
