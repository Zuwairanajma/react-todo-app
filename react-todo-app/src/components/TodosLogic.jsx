import { useState, useEffect} from 'react';
import InputTodo from '../components/InputTodo';
import TodosList from '../components/TodosList';
import { v4 as uuidv4 } from "uuid";
const TodosLogic = () => {
  const [todos, setTodos] = useState (getInitialTodos());
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }
  useEffect(() => {
    //staring todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);
  
  //   [
  //   {
  //     id: uuidv4(),
  //     title: 'Setup development environment',
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'Develop website and add content',
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'Deploy to live server',
  //     completed: false,
  //   },
  // ]);
  const handleChange = (id) => {
    setTodos((prevState) => 
    prevState.map((todo) => {
        if(todo.id === id) {
            return {
                ...todo, 
                completed: !todo.completed,
            };
        }
        return todo;
    })
    );
  };
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
    //console.log('deleted', id);
  };
  const addTodoItem = (title) => {
    // update state with user's input
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  }
  
  return (
    <div>
      <InputTodo addTodoItem={addTodoItem}/>
      <TodosList todosProps={todos} handleChange={handleChange}
      delTodo={delTodo}
      setUpdate={setUpdate}/>
  </div>
  );
}
export default TodosLogic;
