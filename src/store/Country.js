import { action, mutation } from "@/constants/country.constants";
import services from "@/services/country.services";
const state = {
  selectedCountry: null,
};
const actions = {
  async [action.GET_COUNTRIES](context, data) {
    try {
      const response = await services[action.GET_COUNTRIES](data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
  async [action.GET_COUNTRIES_BY_NAME](context, data) {
    try {
      const response = await services[action.GET_COUNTRIES_BY_NAME](data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};
const mutations = {
  [mutation.SET_SELECTED_COUNTRY](context, data) {
    state.selectedCountry = data;
  },
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
};
