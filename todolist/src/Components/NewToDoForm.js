import React, {useState} from 'react'

const NewTodoForm = ({addToDo}) => {
    const [task, setTask] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        addToDo(task)
        setTask('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>New Task:</label>
            <input type='text' value={task} required onChange={(e) => setTask(e.target.value)}/>
            <input type='submit' value='add new task' />
        </form>
     );
}
 
export default NewTodoForm;
