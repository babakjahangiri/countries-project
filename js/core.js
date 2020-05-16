/* ---  API ENDPOINTS Definations  --- */

let url__allCountries = "https://restcountries.eu/rest/v2/all";
let url__getCountryByAlpha2Code =
  "https://restcountries.eu/rest/v2/alpha/{code}";
let url__getCountryByRegion =
  "https://restcountries.eu/rest/v2/region/{region}";
let url__searchCountryByName = "https://restcountries.eu/rest/v2/name/{name}";
//--------------------------------
function fetchData(ApiUrl) {
  return new Promise((resolve, reject) => {
    fetch(ApiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error("unable to get the Api data");
        }
      })
      .then(function (apiData) {
        resolve(apiData);
      });
  });
}

async function getAllCountriesAsync() {
  return await fetchData(url__allCountries);
}

async function getCountryByAlphaCodeAsync(code) {
  return await fetchData(url__getCountryByAlpha2Code.replace("{code}", code));
}

async function getCountryByRegionAsync(region) {
  return await fetchData(url__getCountryByRegion.replace("{region}", region));
}

function getRegions() {
  return ["Africa", "Americas", "Asia", "Europe", "Oceania"];
}
