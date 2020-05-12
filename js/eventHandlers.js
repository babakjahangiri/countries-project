function countryList_events() {
  drdRegions.addEventListener("change", (event) => {
    //  currentShowId = drdShows.value;
  });

  searchBox.addEventListener("input", (event) => {
    //currentShowId = drdShows.value;
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
