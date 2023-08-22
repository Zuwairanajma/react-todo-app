import { useState } from 'react';
import InputTodo from '../components/InputTodo';
import TodosList from '../components/TodosList';
import { v4 as uuidv4 } from "uuid";
const TodosLogic = () => {
  const [todos, setTodos] = useState ([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
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
  return (
    <div>
      <InputTodo addTodoItem={addTodoItem}/>
      <TodosList todosProps={todos} handleChange={handleChange}
      delTodo={delTodo}/>
  </div>
  );
}
export default TodosLogic;


// const TodosLogic = () => {
//   return (
//     <div>TodosLogic content</div>
//   )
// }
// export default TodosLogic;

// import { useState } from 'react';
// // other imported components here
// const TodosLogic = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: 'Setup development environment',
//       completed: true,
//     },
//     {
//       id: 2,
//       title: 'Develop website and add content',
//       completed: false,
//     },
//     {
//       id: 3,
//       title: 'Deploy to live server',
//       completed: false,
//     },
//   ]);
//   return (
//     <div>
//     <InputTodo />
//     <TodosList todosProps={todos} setTodos={setTodos} />
//   </div>
//   );
// };
// export default TodosLogic;