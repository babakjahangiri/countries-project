let countryList = [];
let regionList = [];
//getAllCountriesAsync();

window.onload = pageHasLoaded();

//getCountryByCodeAsync("es").then((data) => console.log(data));
function pageHasLoaded() {
  getAllCountriesAsync().then((data) => {
    data.forEach((el) => {
      countryList.push(el);
    });
    makeCountryPage(data);
  });

  regionList = getRegions();
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
