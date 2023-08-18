const url = 'https://the-birthday-cake-db.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'My_API_KEY',
		'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
	}
};
async function showRecipe(id) {
    const url = `https://the-birthday-cake-db.p.rapidapi.com/${id}`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        //Get ingredients
        var ingredients = result.ingredients
        var ingredients_html = ``
        for ( let i = 0; i < ingredients.length; i++ ) {
            ingredients_html += `<li>${ingredients[i]}</<li>`
        }
        var html = `<div>
            <h2>${result.title}</h2>
            <p>${result.description}</p>
            <h3>Ingredients</h3>
            <ul>${ingredients_html}</ul>
            <button onclick="displayCakes()" type="button" class="btn btn-secondary">View All Cakes</button>
            </div>`
        $("#display").empty()
        $("#display").html(html)
    } catch (error) {
        console.error(error);
    }
}

async function displayCakes() {try {
    const response = await fetch(url, options);
    const result = await response.json();
    var html = ``
    for ( let j = 0; j < result.length; j++ ) {
        html += `<div class="col-12 col-lg-6" id="${result[j].id}">
        <div class="card">
            <img src="${result[j].image}" class="card-img-top">
            <div class="card-body">
                <h2 class="card-title">${result[j].title} <span class="badge bg-secondary">New</span></h2>
                <p class="card-text">${result[j].difficulty}</p>
                <button onclick="showRecipe(${result[j].id})" type="button" class="btn btn-primary">Get Recipe</button>
            </div>
        </div>
    </div>`
    //set html content
    $("#display").html(html)
    }
} catch (error) {
    console.error(error);
}}

$().ready(
displayCakes()  
)

