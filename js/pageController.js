let countryList = [];
let regionList = [];
let pageState = 1; // 1:Country List   2: Country Page
let pageAlpha2code = "";
//getAllCountriesAsync();

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

  regionList = getRegions();
}

function loadCountryList() {
  getAllCountriesAsync().then((data) => {
    data.forEach((el) => {
      countryList.push(el);
    });
    createCountryListPage(data);
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
