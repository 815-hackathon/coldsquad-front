import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Food from './Food';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &:visited,
  &:link {
    color: black;
    text-decoration: none;
  }
`;

const FoodList = ({ foods, onClick, onRemove, dispatch }) => {
  const getFoods = foods =>
    foods.map(food => (
      <StyledNavLink to={`/food/${food._id}`} key={food._id}>
        <Food data-id={food._id} key={food._id} {...food} onClick={onClick} onRemove={onRemove} dispatch={dispatch} />
      </StyledNavLink>
    ));

  const foodComponents = getFoods(foods);

  return <>{foodComponents}</>;
};

export default FoodList;
