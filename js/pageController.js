let countryList = [];
let regionList = [];
let pageState = 1; // 1:Country List   2: Country Page
let pageAlpha2code = "";
let eventStatus = 0;
//getAllCountriesAsync();

if (regionList.length <= 1) {
  regionList = getRegions();
}

window.onload = loadPage();

//getCountryByCodeAsync("es").then((data) => console.log(data));
function loadPage() {
  if (pageState == 1) {
    loadCountryList();
  } else if (pageState == 2) {
    loadCountryDetails();
  } else {
    console.error("can not detect the page state");
  }
}

function loadCountryList() {
  getAllCountriesAsync().then((data) => {
    if (countryList.length <= 1) {
      data.forEach((el) => {
        countryList.push(el);
      });
    }
    createCountryListPage(data);

    if (eventStatus == 0) {
      countryList_events();
      eventStatus = 1;
    }

    //loadDrdFilters(regionList);
  });
}

function loadCountryDetails() {
  getCountryByAlphaCodeAsync(pageAlpha2code).then((data) => {
    createCountryPage(data);
  });
}

async function getCountryNameAsync(alphaCode) {
  return await getCountryByAlphaCodeAsync(alphaCode).then((data) => {
    data.name;
  });
}

function searchCountry(keyword) {
  let searchResult = countryList.filter((country) => {
    return country.name.toLowerCase().includes(keyword.toLowerCase());
  });
  createCountryListPage(searchResult);
}

function listCountriesInContinent(continentName) {
  //console.log(continentName);
  let searchResult = countryList.filter(
    (c) => c.region.toLowerCase() == continentName.toLowerCase()
  );

  createCountryListPage(searchResult);
  console.log(countryList);
}
