// const nutritionAPIKey = "38d3947a3f2af312047999390586a0ad";
const nutritionAppID = "bcb4f082";
const nutritionAPIKey = "da752aa39f354e08db9030353c70bf8b";
const baseURL = "https://edamam-edamam-nutrition-analysis.p.mashape.com/api/nutrition-data?"

function get(ingredient) {

    let searchUrl = `https://api.edamam.com/api/nutrition-data?app_id=${nutritionAppID}&app_key=${nutritionAPIKey}&ingr=1%20large%20apple`;
    console.log('nutrition search url: ', searchUrl);

    $.ajax({
        url: searchUrl,
        method: 'GET'
    }).then(function (response) {
        console.log('response: ', response);
    })
}

get("apple")
// let ingredientPart = "ingr=";
// let searchText = ingredient;
// let searchUrl = `${baseURL}app_id=${nutritionAppID}&app_key=${nutritionAPIKey}`;