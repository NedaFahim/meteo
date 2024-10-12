function handleSearchSubmit(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");
  let weatherAppCity = document.querySelector("#weather-app-city");
  weatherAppCity.innerHTML = searchFormInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
