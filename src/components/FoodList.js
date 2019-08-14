import React from 'react';

const FoodList = ({ foods }) => {
  const getFoods = foods =>
    foods.map((food, i) => (
      <div key={i}>
        {food.name} {food.owner} {food.category} {food.memo}
      </div>
    ));

  const foodComponents = getFoods(foods);

  return <>{foodComponents}</>;
};

export default FoodList;
