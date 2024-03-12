import {connect} from "react-redux";
import {addToDo, removeToDo} from "./actions.js"


const ToDoList = ({todos,addToDo,removeToDo}) => {
    const handleAddTodo = () => {
        const text = prompt('Введите текст задачи');
        if (text){
            addToDo(text);
        }
    };

    const handleRemoveTodo = (id: number) => {
        removeToDo(id);
    };


    return (
        <div>
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos && todos.map ((todo: {id: number, text: string}) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state: {todos: Array<{id: number, text: string}>}) => ({
    todos: state.todos,
});

const mapDispatchToProps = {
    addToDo: addToDo,
    removeToDo: removeToDo,
};

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);

