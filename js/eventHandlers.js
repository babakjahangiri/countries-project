function countryList_events() {
  drdRegions.addEventListener("change", (event) => {
    //  currentShowId = drdShows.value;
    findEpisodeByShowId(drdShows.value);
  });

  searchBox.addEventListener("input", (event) => {
    //currentShowId = drdShows.value;
    findEpisodeByShowId(drdShows.value);
  });
}

function countryCardClick(element) {
  element.addEventListener("click", (event) => {
    //currentShowId = drdShows.value;
    //findEpisodeByShowId(drdShows.value);
    alert("clicked");
  });
}

function countryPage_events() {
  backBtn.addEventListener("click", (event) => {
    //currentShowId = drdShows.value;
    //go to country page
  });

  countrybtn.addEventListener("click", (event) => {
    //currentShowId = drdShows.value;
    //go to specific country page
  });
}
