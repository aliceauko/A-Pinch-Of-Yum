//Fetch and dispalay it in the DOM
const searchBtn = document.getElementById('submit')
searchBtn.addEventListener('submit', function(e){
    e.preventDefault();
   let inpValue = e.target.querySelector('input').value
    getMealList(inpValue)
})

function  getMealList(){

    let  searchInp = document.getElementById('sear').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInp}`)
    .then((response)=> response.json())
    .then(data=>displayFoods(data))


    const displayFoods =foods =>{
    const foodItemsDiv = document.getElementById('food-items');
    foods.meals.forEach(meal => {
        const foodDiv = document.createElement('div');
        foodDiv.className='meal';
        const foodInfo = `
        <h3 class="big">Meal name:${meal.strMeal}</h3>
        <h4>Meal Category:${meal.strCategory}</h4>
        <p class ="meal-info">Instructions: ${meal.strInstructions}</p>
    
        <img src= ${meal.strMealThumb}>
        `;
        foodDiv.innerHTML = foodInfo;
        foodItemsDiv.appendChild(foodDiv);

        
    });
    
}

};
getMealList()





