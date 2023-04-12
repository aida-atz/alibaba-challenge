<template>
  <section class="countries-section">
    {{ filterBy }}
    <div class="countries-section__filter-section">
      <SearchInput @search="searchCountry" />
      <baseSelectOption :options="filterOptions" @input="filterCountry" />
    </div>
    <div class="countries-section__list">
      <Suspense>
        <template #default>
          <countryList :countries="countries" @select="findSelectedCountry" />
        </template>
        <template #fallback>
          <countryCardLoading v-for="item in Array(20)" :key="item" />
        </template>
      </Suspense>
    </div>
  </section>
</template>
<script setup>
import baseSelectOption from "@/components/BaseSelectOption.vue";
import countryCardLoading from "@/components/Country/CountryCardLoading.vue";
import SearchInput from "@/components/SearchInput.vue";
import { reactive, isReactive, defineAsyncComponent, ref } from "vue";
import {
  FEILDS,
  mutation,
  state,
  FILTER_OPTIONS,
} from "@/constants/country.constants";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useArray } from "@/hooks/useArray";
const router = useRouter();
const countryList = defineAsyncComponent(() =>
  import("@/components/Country/CountryList.vue")
);
const store = useStore();
let countries = reactive([]);
const customFields = {
  fields: FEILDS,
};
async function searchCountry(value) {
  try {
    if (value != "") {
      const response = await store.dispatch("country/getCountriesByName", {
        name: value,
        params: customFields,
      });
      countries.length = 0;
      response.forEach((res, index) => {
        countries.push({ ...res, id: index, officialName: res.name.official });
      });
    } else {
      getCountries();
    }
  } catch (e) {
    console.log(e);
  }
}
async function getCountries() {
  try {
    countries.length = 0;
    const response = await store.dispatch("country/getCountries", customFields);
    response.forEach((res, index) => {
      countries.push({ ...res, id: index, officialName: res.name.official });
    });
  } catch (e) {
    console.log(e);
  }
}
getCountries();
function findSelectedCountry(id) {
  const country = countries.find((country) => country.id == id);
  store.commit("country/setSelectedCountry", country);
}

const filterOptions = FILTER_OPTIONS;
const filterBy = ref("");
const { sortArrayOfObjects } = useArray();
function filterCountry(value) {
  countries = sortArrayOfObjects(countries, value);
}
</script>
<style lang="scss">
.countries-section {
  &__list {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 300px));
    justify-content: center;
  }
  &__filter-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.4rem;
  }
}
</style>
