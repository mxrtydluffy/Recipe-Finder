const userSearchForm = document.querySelector('form');
const usersSearchResults = document.querySelector('.searchResults');
const container = document.querySelector('.container');
let searchInput = '';
const APP_ID = "696f4060";
const APP_KEY = "c94edefdff3f880d27188d0861d75a02";

userSearchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchInput = e.target.querySelector('input').value;
  getRecipes();
})

async function getRecipes(){
  const URL = `https://api.edamam.com/search?q=${searchInput}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=15`;
  const response = await fetch(URL); 
  const data = await response.json();
  displayResults(data.hits)
  console.log(data);
}

function displayResults(results){
  container.classList.remove('container');
  let resultsHTML= '';
  results.map(result => {
    resultsHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" target="_blank" href="${result.recipe.url}">View Recipe</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(0)}</p>
        <p class="item-data">Diet Label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'Sorry, No Data Found.'}</p>
        <p class="item-data">Health Labels: ${result.recipe.healthLabels}</p>
      </div>
    `
  })
  usersSearchResults.innerHTML = resultsHTML;
}