import React, { Component } from 'react'

class AddForm extends Component {
    state = {
        titleJob:'',
        salary:''
    }
    handleSubmit(){
        if(!this.state.titleJob === ''|| this.state.salary === '') {
            alert('Please type a job');
            return
        }else{
            this.props.handleAddListJob(
                {
                    id:Math.floor(Math.random()* 1001),
                    titleJob:this.state.titleJob,
                    salary:this.state.salary
                }
            )
        }
        this.setState({
            titleJob:'',
            salary:''
        })
    }
    render() { 
        const {titleJob,salary} = this.state;
        return (
            <div>
                  <label>Job:</label><br/>
                    <input 
                    ref={this.props.inputRef}
                    value={titleJob}
                    onChange={(e)=>this.setState({titleJob: e.target.value})}
                    type="text"/><br/>
                    <label >Salary:</label><br/>
                    <input value={salary} type="text"
                    onChange={(e)=>this.setState({salary: e.target.value})}
                    /><br/><br/>
                    <button onClick={()=>this.handleSubmit()}>Add</button>
            </div>
        );
    }
}
 
export default AddForm;