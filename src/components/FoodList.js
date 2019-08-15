import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Food from './Food';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const FoodList = ({ foods }) => {
  const getFoods = foods =>
    foods.map(food => (
      <StyledLink key={food.id} to={`/food/${food.id}`}>
        <Food {...food} />
      </StyledLink>
    ));

  const foodComponents = getFoods(foods);

  return <>{foodComponents}</>;
};

export default FoodList;
