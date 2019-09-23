module.exports = (req, res) => {
  const todos = [
    {
      userId: 1,
      id: 1,
      title: 'My new Todo',
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false
    }
  ];
  res.send({ todos: todos });
};
