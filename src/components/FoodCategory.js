import React from 'react';
import styled from 'styled-components';

import Filter from './Filter';
import { categories } from '../constants';

const FoodCategory = ({ category, toggleCategory }) => {
  const getComponents = () =>
    categories.map(item => (
      <Filter selected={category === item} onClick={() => toggleCategory(item)}>
        {item}
      </Filter>
    ));
  return (
    <>
      <Filter selected={category === '전체'} onClick={() => toggleCategory('전체')}>
        전체
      </Filter>
      {getComponents()}
    </>
  );
};

export default FoodCategory;
