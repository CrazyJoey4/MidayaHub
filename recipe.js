//Initial References
let result = document.getElementById("result");
let searchForm = document.getElementById("search-form");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchForm.addEventListener("submit", async(e) => {
    e.preventDefault()
    let userInp = document.getElementById("user-inp").value;
    if (userInp.length == 0) {
        alert("Search Term Cannot be Blank");
    } 
    else {
        fetch(url + userInp)
        .then((response) => response.json())
        .then((data) => {
            let myMeal = data.meals[0];
            console.log(myMeal);
            console.log(myMeal.strMealThumb);
            console.log(myMeal.strMeal);
            console.log(myMeal.strArea);
            console.log(myMeal.strInstructions);
            let count = 1;
            let ingredients = [];
            for (let i in myMeal) {
                let ingredient = "";
                let measure = "";
                if (i.startsWith("strIngredient") && myMeal[i]) {
                    ingredient = myMeal[i];
                    measure = myMeal[`strMeasure` + count];
                    count += 1;
                    ingredients.push(`${measure} ${ingredient}`);
                }
            }
            console.log(ingredients);
            result.innerHTML = `
                <img src=${myMeal.strMealThumb}>
                <div class="details">
                    <h2>${myMeal.strMeal}</h2>
                    <h4>${myMeal.strArea}</h4>
                </div>
                <div id="ingredient-con"></div>
                <div id="recipe">
                    <pre id="instructions">${myMeal.strInstructions}</pre>
                </div>
                `;
            let ingredientCon = document.getElementById("ingredient-con");
            let parent = document.createElement("ul");
            let recipe = document.getElementById("recipe");
            ingredients.forEach((i) => {
                let child = document.createElement("li");
                child.innerText = i;
                parent.appendChild(child);
                ingredientCon.appendChild(parent);
            });
            
        })

        .catch(() => {
            result.innerHTML = `<h3>Invalid Input</h3>`;
        });
    }
});