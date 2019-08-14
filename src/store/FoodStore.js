import React, { useState, useReducer } from 'react';

import foodReducer from '../reducer/foodReducer';

export const FoodContext = React.createContext();

const FoodStore = ({ children }) => {
  const [foods, setFoods] = useReducer(foodReducer, [{ name: 'test' }]);

  return <FoodContext.Provider value={{ foods }}>{children}</FoodContext.Provider>;
};

export default FoodStore;
