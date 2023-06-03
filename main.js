const SearchBox = document.querySelector("#SearchBox");
const suggestionsGroup = document.querySelector(".suggestions ul");

SearchBox.addEventListener("keyup", searchHandler);
suggestionsGroup.addEventListener("click", useSuggestion);

const fruits = [
  "Apple",
  "Strawberry",
  "Avocado",
  "Pineapple",
  "Watermelon",
  "Mango",
  "Kiwi",
  "Orange",
  "Berry",
  "Blueberry",
  "Cherry",
  "Lemon",
  "Apricot",
  "Figs",
  "Plum",
  "Papaya",
  "Grapefruit",
  "Banana",
  "Grapes",
  "Damson",
];

function search(str) {
  let results = [];
  const val = str.toLowerCase();

  for (i = 0; i < fruits.length; i++) {
    if (fruits[i].toLowerCase().indexOf(val) > -1) {
      results.push(fruits[i]);
    }
  }

  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value;
  let results = [];
  if (inputVal.length > 0) {
    results = search(inputVal);
  }
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  suggestionsGroup.innerHTML = "";

  if (results.length > 0) {
    for (i = 0; i < results.length; i++) {
      let item = results[i];
      // Highlights only the first match
      // TODO: highlight all matches
      const match = item.match(new RegExp(inputVal, "i"));
      item = item.replace(match[0], `<strong>${match[0]}</strong>`);
      suggestionsGroup.innerHTML += `<li>${item}</li>`;
    }
    suggestionsGroup.classList.add("has-suggestions");
  } else {
    results = [];
    suggestionsGroup.innerHTML = "No Fruits";
    suggestionsGroup.classList.remove("has-suggestions");
  }
}

function useSuggestion(e) {
  SearchBox.value = e.target.innerText;
  SearchBox.focus();
  suggestionsGroup.innerHTML = "";
  suggestionsGroup.classList.remove("has-suggestions");
}
