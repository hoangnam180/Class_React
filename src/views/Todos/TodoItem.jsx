import React from 'react';
import './Todo.scss';
class TodoItem extends React.Component {
    render() { 
        const {TodoList} = this.props;
        return (
            <ul className="todo_list">
                {TodoList.map((todo,index) =>(
                 <li key={todo.id} className="todo_item">
                     <span>{todo.name}</span>
                     <button 
                     onClick={()=>this.props.handleDeleteTodoList(todo.id)}
                     className="todo_button">Xóa</button>
                     <button className="todo_button">Sửa</button>
                 </li>
                ))}
            </ul>
        );
    }
}
 
export default TodoItem;