import React from 'react';

const Food = ({ id, name, owner, category, memo }) => {
  return (
    <div>
      {name} {owner} {category} {memo}
    </div>
  );
};

export default Food;
