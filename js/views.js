const elcountryListSection = document.getElementById("countryListSection");
let containerDrdRegion = document.querySelector("#containerDrdRegion");

function createCountryListPage(countriesData) {
  elcountryListSection.innerHTML = "";

  let textSearch = document.querySelector("#search-container");
  let btnBack = document.querySelector("#btnBack");
  btnBack.style.display = "none";
  textSearch.style.display = "block";

  containerDrdRegion.style.visibility = "visible";

  let regionsParentEl = document.querySelector("#select-filter-continent");
  for (var i = 0; i < regionList.length; i++) {
    let aSelect = document.createElement("A");
    aSelect.innerText = regionList[i];
    regionsParentEl.appendChild(aSelect);
  }

  Object.entries(countriesData).forEach(function ([index, e]) {
    createCountryItem(e);
    // console.log(e);
  });

  //searchCountry();
}

function createCountryItem(countryData) {
  elcountryListSection.className = "container--country-list";
  let divCountryItem = document.createElement("div");
  elcountryListSection.appendChild(divCountryItem);
  divCountryItem.className = "country-card";

  let elImg = document.createElement("img");
  divCountryItem.appendChild(elImg);

  let elH1 = document.createElement("h1");
  divCountryItem.appendChild(elH1);

  elH1.innerText = countryData.name;
  elImg.src = countryData.flag;

  countryCardClick(divCountryItem, countryData.alpha2Code);

  let elUL = document.createElement("ul");
  divCountryItem.appendChild(elUL);

  elUL.insertAdjacentHTML(
    `beforeend`,
    `<li><b>Population : </b>${countryData.population}</li>`
  );

  elUL.insertAdjacentHTML(
    `beforeend`,
    `<li><b>Region : </b>${countryData.region}</li>`
  );
  elUL.insertAdjacentHTML(
    `beforeend`,
    `<li><b>Capital : </b>${countryData.capital}</li>`
  );
}

function createCountryPage(countryData) {
  // reset the page
  elcountryListSection.innerHTML = "";

  let btnBack = document.querySelector("#btnBack");
  btnBack.style.display = "block";

  let textSearch = document.querySelector("#search-container");
  textSearch.style.display = "none";

  containerDrdRegion.style.visibility = "hidden";
  // call event for back button
  countryPage_events(btnBack);

  elcountryListSection.className = "container--country-view";
  let divLeft = document.createElement("div");
  let divRight = document.createElement("div");
  divRight.className = "container--country-right";
  elcountryListSection.appendChild(divLeft);
  elcountryListSection.appendChild(divRight);

  divLeft.className = "container--country-img";

  let elImg = document.createElement("img");
  divLeft.appendChild(elImg);

  let elH1 = document.createElement("h1");
  divRight.appendChild(elH1);

  let elinfoDiv = document.createElement("div");
  elinfoDiv.className = "container--country-details";
  divRight.appendChild(elinfoDiv);

  let elDiv1 = document.createElement("div");
  let elDiv2 = document.createElement("div");
  let elDiv3 = document.createElement("div");
  let elDiv4 = document.createElement("div");
  let elDiv5 = document.createElement("div");
  let elDiv6 = document.createElement("div");
  let elDiv7 = document.createElement("div");
  let elDiv8 = document.createElement("div");

  let itemsDiv = [
    elDiv1,
    elDiv2,
    elDiv3,
    elDiv4,
    elDiv5,
    elDiv6,
    elDiv7,
    elDiv8,
  ];

  itemsDiv.forEach((div) => {
    elinfoDiv.appendChild(div);
  });

  function formatPopulation(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "1,");
  }

  // -- fill data ---

  elH1.innerText = countryData.name;
  elImg.src = countryData.flag;

  elDiv1.innerHTML = `<b>Native Name : </b> ${countryData.nativeName}`;
  elDiv2.innerHTML = `<b>Population : </b> ${formatPopulation(
    countryData.population
  )}`;
  elDiv3.innerHTML = `<b>Region : </b> ${countryData.region}`;
  elDiv4.innerHTML = `<b>Sub Region : </b> ${countryData.subregion}`;
  elDiv5.innerHTML = `<b>Capital : </b> ${countryData.capital}`;
  elDiv6.innerHTML = `<b>Top Level Domain : </b> ${countryData.topLevelDomain}`;
  elDiv7.innerHTML = `<b>Currencies : </b> ${countryData.currencies[0].name}`;

  let langs = [];
  let langObj = countryData.languages;
  for (key in langObj) {
    if (langObj.hasOwnProperty(key)) {
      langs.push(langObj[key].name);
    }
  }
  elDiv8.innerHTML = `<b>Languages : </b> ${langs.join(",")}`;

  elDivBorderCountry = document.createElement("div");
  elDivBorderCountry.className = "container-border-countries";
  divRight.appendChild(elDivBorderCountry);

  elSpanText = document.createElement("span");
  elSpanText.innerText = "Border Countries :";

  elDivBorderCountry.appendChild(elSpanText);

  let borderCountries = [];
  let bcObj = countryData.borders;

  if (bcObj.length < 1) {
    elSpanText.style.display = "none";
  }

  for (key in bcObj) {
    if (bcObj.hasOwnProperty(key)) {
      // getCountryNameAsync("IRN").then((c) => console.log(c));

      getCountryByAlphaCodeAsync(bcObj[key]).then((data) => {
        var elbtn = document.createElement("button");
        elbtn.id = "bc_" + data.alpha2Code;
        elbtn.value = data.alpha2Code;
        elbtn.innerText = data.name;

        elDivBorderCountry.appendChild(elbtn);

        //countryViewBtn_event();
        countryViewBtn_event(elbtn, data.alpha2Code); // problem here !!!!
      });
    }
  }
}
