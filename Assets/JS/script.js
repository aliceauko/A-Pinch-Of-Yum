//Fetch and dispalay it in the DOM
document.addEventListener("DOMContentLoaded", () => {
    getMeal()
 })


  //Filter the data
  let data =[];
  const searchInp = document.getElementById('sear')
  searchInp.addEventListener('keyup', (e) =>{
  const searchString = e.target.value.toLowerCase();
  console.log(searchString)
  const filterFood = data.filter((meal)=> {
       return ( meal.strMeal.toLowerCase().includes(searchString)||
                meal.strCategory.toLowerCase().includes(searchString)
       );
    });
    displayFoods(filterFood)
  });
  



function  getMeal(){


    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response)=> response.json())
    .then(data=>displayFoods(data))
     //console.log(data)

}
//display on the DOM
const meals =[]
   const  displayFoods =foods =>{
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
    console.log(foods.meals)
}








