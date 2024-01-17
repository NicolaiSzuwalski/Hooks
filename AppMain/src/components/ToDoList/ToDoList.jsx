import { useState } from 'react';
import styles from './ToDoList.module.scss';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showInput, setShowInput] = useState(false);

  const addTodo = () => {
    setTodos([...todos, { id: todos.length + 1, text: newTodo }]);
    setNewTodo('');
    setShowInput(false); // Skjul inputfeltet efter tilføjelse af TODO
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className={styles.todoWrapper}>
      <h1>ToDo</h1>
      <span className={styles.line}></span>

      {!showInput && (
        <button className={styles.addTodo} onClick={() => setShowInput(true)}><span class="material-symbols-outlined">add_circle</span>Add new</button>
      )}

      {showInput && (
        <div>
          <input className={styles.todoText} type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className={styles.addTodo} onClick={addTodo}>Tilføj TODO</button>
        </div>
      )}

      <ul>
        {todos.map((todo) => (
          <li className={styles.todoList} key={todo.id}>
            {todo.text}
            <button className={styles.delTodo} onClick={() => deleteTodo(todo.id)}><span className="material-symbols-outlined">do_not_disturb_on</span></button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button className={styles.delAllTodos} onClick={deleteAllTodos}>Delete all todos</button>
      )}
    </div>
  );
};
