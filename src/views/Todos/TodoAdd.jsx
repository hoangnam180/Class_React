import React from 'react';
import './Todo.scss';
class TodoAdd extends React.Component {
    state = { name: '' }; 
    handleClick(name){
        if(!this.state.name){
            alert('Please type Todo...');
            return;
        }
        const newTodo = {id:Math.floor(Math.random()*1000),name:name};
        this.props.handleAddTodoList(newTodo);
        this.setState({name: ''});
    }
    render() { 
        return (
            <>
            <input value={this.state.name} 
            onChange={(e) => this.setState({ name: e.target.value })}
            type="text" placeholder="Add Todo"/>
            <button onClick={()=>this.handleClick(this.state.name)} className="todo_button">Add</button>
            </>
        );
    }
}
 
export default TodoAdd;