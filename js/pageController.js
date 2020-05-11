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
  console.log(pageAlpha2code);
  getCountryByAlpha2CodeAsync(pageAlpha2code).then((data) => {
    createCountryPage(data);
  });
}

//getCountryByRegionAsync("europe").then((data) => console.log(data));

//console.log(countryList);

//myObject = data;
/* 
.then(episodeData => {      
    episodeData.forEach(el=>{
        el.showId = showsIdList[showsId];
        allEpisodesList.push(el);          
    })    
    showsId++;
    getEpisodes();       
})
*/
