import React, {useState} from 'react'
import { v1 as uuidv1 } from 'uuid';
import NewTodoForm from './NewToDoForm';

const ToDoList = () => {
    const [todos, setTodos] = useState([ //data itself, then function to change the data (todos, setTodos)
        {task: 'meal prep', id: 1},
        {task: 'skin care routine', id: 2},
        {task: 'push to git', id: 3}
    ]);

    const addToDo = (task) => {
        setTodos([...todos, {task, id: uuidv1()}])
    }
    return ( 
        <div className='toDo-List'>
            <ul>
            {todos.map(todo => {
                return (<li key={todo.id}>{todo.task}</li>)
            })}
            </ul>
        <NewTodoForm addToDo={addToDo}/>
        </div>
     );
}
 
export default ToDoList;