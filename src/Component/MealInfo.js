import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MealInfo = () => {
  const [randomMealInfo, setRandomMealInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      );
      setRandomMealInfo(res.data);
    };
    getData();
  }, []);
  console.log('randomMealInfo', randomMealInfo);
  return (
    <div style={{ paddingLeft: '20px' }}>
      <h1>Random Meal Ingredient</h1>
      {randomMealInfo.length !== 0
        ? randomMealInfo.meals.map((meal) => {
            console.log(meal);
            return (
              <div>
                <h3>Famous in {meal.strArea}</h3>
                <h4>Meal Category {meal.strCategory}</h4>
                <h4>Ingredients</h4>
                <p>{meal.strIngredient1}</p>
                <p>{meal.strIngredient2}</p>
                <p>{meal.strIngredient3}</p>
                <p>{meal.strIngredient4}</p>
                <p>{meal.strIngredient5}</p>
              </div>
            );
          })
        : 'Loading'}
    </div>
  );
};

export default MealInfo;
