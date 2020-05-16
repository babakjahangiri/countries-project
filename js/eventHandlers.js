function countryList_events() {
  // drdRegions.addEventListener("change", (event) => {
  //  currentShowId = drdShows.value;
  // });

  let textSearch = document.querySelector("#txtSearch");
  textSearch.addEventListener("input", (event) => {
    searchCountry(textSearch.value.trim());
  });

  let drdRegion = document.querySelector("#drdRegion");
  let selectArrow = document.querySelector("#selectArrow");
  let elRegions = document.querySelector("#select-filter-continent");
  let isDown;
  let isUp;
  elRegions.style.display = "none";

  drdRegion.addEventListener(
    "click",
    (event) => {
      isDown = selectArrow.classList.toggle("icon-angle-down");
      isUp = selectArrow.classList.toggle("icon-angle-up");

      if (isDown == true) {
        elRegions.style.display = "none";
      }
      if (isUp == true) {
        elRegions.style.display = "block";
      }
      event.stopPropagation();
    },
    false
  );

  let bDoc = document.getElementsByTagName("body");
  bDoc[0].addEventListener("click", (event) => {
    if (isDown == false) {
      elRegions.style.display = "none";
      isDown = selectArrow.classList.toggle("icon-angle-down");
      isUp = selectArrow.classList.toggle("icon-angle-up");
    }
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
}

function countryViewBtn_event(element, alpha2Code) {
  element.addEventListener("click", (event) => {
    pageState = 2;
    pageAlpha2code = alpha2Code;
    loadPage();
  });
}
