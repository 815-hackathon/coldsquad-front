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
      return todos.filter(todo => todo.id !== payload);
  }
};
