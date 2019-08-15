import React from 'react';
import styled from 'styled-components';

import Filter from './Filter';
import { categories, mappingTable } from '../constants';

const FoodCategory = ({ category, toggleCategory }) => {
  const getComponents = () =>
    categories.map((item, i) => (
      <Filter key={i} selected={category === item} onClick={() => toggleCategory(item)}>
        {mappingTable[item]}
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
