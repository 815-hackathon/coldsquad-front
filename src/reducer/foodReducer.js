export default (foods, { type, payload }) => {
  switch (type) {
    case 'INIT':
      return payload;
    case 'ADD':
      return [
        ...foods,
        {
          name: payload
        }
      ];
    case 'DELETE':
      return foods.filter(foods => foods.id !== payload);
  }
};
