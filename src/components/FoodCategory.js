import React from 'react';
import styled from 'styled-components';

const Filter = styled.span`
  color: ${({ selected }) => (selected ? 'red' : 'black')};
`;

const FoodCategory = ({ category, toggleCategory }) => {
  return (
    <>
      <Filter selected={category === '전체'} onClick={() => toggleCategory('전체')}>
        전체
      </Filter>
      /
      <Filter selected={category === '유제품'} onClick={() => toggleCategory('유제품')}>
        유제품
      </Filter>
      /
      <Filter selected={category === '주류'} onClick={() => toggleCategory('주류')}>
        주류
      </Filter>
      /
      <Filter selected={category === '음료'} onClick={() => toggleCategory('음료')}>
        음료
      </Filter>
      /
      <Filter selected={category === '빙과류'} onClick={() => toggleCategory('빙과류')}>
        빙과류
      </Filter>
      /
      <Filter selected={category === '빵'} onClick={() => toggleCategory('빵')}>
        빵
      </Filter>
    </>
  );
};

export default FoodCategory;
