import axios from "axios";
export function getCountries(params) {
  return axios({
    method: "GET",
    url: "/all",
    params,
  });
}
export function getCountriesByName(data) {
  const { name, params } = data;
  console.log(data);
  return axios({
    method: "GET",
    url: "/name/" + name,
    params,
  });
}
export default {
  getCountries,
  getCountriesByName,
};
