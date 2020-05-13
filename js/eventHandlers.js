function countryList_events() {
  // drdRegions.addEventListener("change", (event) => {
  //  currentShowId = drdShows.value;
  // });

  let textSearch = document.querySelector("#txtSearch");
  textSearch.addEventListener("input", (event) => {
    searchCountry(textSearch.value.trim());
  });
}

function countryCardClick(element, alpha2Code) {
  element.addEventListener("click", (event) => {
    pageState = 2;
    pageAlpha2code = alpha2Code;

    loadPage();
  });
}

function countryPage_events(btnBack) {
  btnBack.addEventListener("click", (event) => {
    pageState = 1;
    pageAlpha2code = "";

    loadPage();
  });

  function countryViewBtn_event(element, alpha2Code) {
    element.addEventListener("click", (event) => {
      pageState = 2;
      pageAlpha2code = alpha2Code;
      //loadPage();
      alert("fffff");
    });
  }
}
