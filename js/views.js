const elcountryListSection = document.getElementById("countryListSection");

function makeCountryPage(countryData) {
  Object.entries(countryData).forEach(function ([index, e]) {
    makeCountryItem(e);
    // console.log(e);
  });
}

function makeCountryItem(countryData) {
  let divCountryItem = document.createElement("div");
  elcountryListSection.appendChild(divCountryItem);
  divCountryItem.className = "country-card";

  let elImg = document.createElement("img");
  divCountryItem.appendChild(elImg);

  let elH1 = document.createElement("h1");
  divCountryItem.appendChild(elH1);

  elH1.innerText = countryData.name;
  elImg.src = countryData.flag;

  countryCardClick(divCountryItem);

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

  /*
alpha2Code

population: 27657145
region
capital




*/
}
