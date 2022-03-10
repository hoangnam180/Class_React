import React from 'react';
import './Todo.scss';
import TodoAdd from './TodoAdd';
import TodoItem from './TodoItem';
class TodoList extends React.Component {
    state = {todoList: [
        {
            id: 1,
            name: 'Learn React',
        },
        {
            id: 2,
            name: 'Learn Redux',
        },
        {
            id: 3,
            name: 'Learn React Native',
        },

    ]}; 

    handleAddTodoList = (newTodo) => {
        this.setState({
            todoList: [...this.state.todoList,newTodo]
        });
    }

    handleDeleteTodoList = (id) => {
        console.log(id);
        const newTodo = this.state.todoList.filter(todo=>todo.id !== id);
        this.setState(
            {
                todoList: [...newTodo]
            }
        )
    }
    render() { 
        return (
            <div className="todo_container">
                <h1>Todo List</h1>
                <TodoAdd handleAddTodoList={this.handleAddTodoList.bind(this)}/>
                <TodoItem handleDeleteTodoList={this.handleDeleteTodoList.bind(this)} TodoList = {this.state.todoList}/>
            </div>
        );
    }
}
 
export default TodoList;