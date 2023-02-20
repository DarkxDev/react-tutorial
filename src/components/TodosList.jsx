const TodosList = ({ todosProps, setTodos }) => {

  const handleChange = (id) => {
    console.log('clicked', id);
  };

  return (
    <ul>
      {todosProps.map((todo) => (
        <li key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChange(todo.id)}
        />
        {todo.title}
      </li>
      ))}
    </ul>
  );
};
export default TodosList;
