// need to add search id name to Paloma's landing page
// will probably change this later to getElementByID
// but works for now
let searchBtn = document.querySelector('#search')

searchBtn.addEventListener('click', ()=>{
    console.log('Button Clicked!')
    getAPI()
})

// using this API as a placeholder for now until I figure out how to
// use the Tasty One.
// praticing ways to use fetch
// asynchronous function that'll fetch data from the edamam API
async function getAPI(){
    let APP_ID = '696f4060'
    let APP_KEY = 'c94edefdff3f880d27188d0861d75a02'
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=soba`);
    console.log(response)
	let data = await response.json()
	console.log(data)
	useAPI(data)
}

// function that'll do something with the data recieved from the API.
// temporary html content to show API
function useAPI(data){
	document.querySelector('#content').innerHTML = `
	<div class="card mx-auto mt-3" style="width: 230px;">
  		<img src="${data.hits[1].recipe.image}" class="card-img-top" alt="">
  	<div class="card-body">
    	<h5 class="card-title">${data.hits[1].recipe.label}</h5>
    	<p class="card-text">Source: ${data.hits[1].recipe.source}</p>
    	<a href="${data.hits[1].recipe.url}" class="btn btn-primary">Go To Recipe</a>
  	</div>
	</div>
`
}

// Practicing:
// fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=taco`), {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//     })
//     .then(res => {
//         return res.JSON()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))
// }


// fetch('https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=taco', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//     })
// }).then(res => {
//    return res.json()
// })
//   .then(data => console.log(data))
//   .catch(error => console.log('ERROR'))