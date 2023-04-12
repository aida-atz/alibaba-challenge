export const routes = Object.freeze({
  DETAILS_NAME: "details",
  DETAILS_PATH: "/:name",
});
export const action = Object.freeze({
  GET_COUNTRIES: "getCountries",
  GET_COUNTRIES_BY_NAME: "getCountriesByName",
});
export const mutation = Object.freeze({
  SET_SELECTED_COUNTRY: "setSelectedCountry",
});
export const state = Object.freeze({
  SELECTED_COUNTRY: "selectedCountry",
});
export const FEILDS =
  "name,population,region,capital,flags,subregion,currencies,languages";

export const DETAILS = {
  capital: {
    value: "",
    title: "Capital",
  },
  currencies: {
    value: "xzxzx",
    title: "Currencies",
  },
  languages: {
    value: "",
    title: "Languages",
  },
  name: {
    value: "",
    title: "Native Name",
  },
  population: {
    value: "",
    title: "Population",
  },
  region: {
    value: "",
    title: "Region",
  },
  subregion: {
    value: "",
    title: "Sub Region",
  },
};
