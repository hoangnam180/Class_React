import React from 'react';
import AddForm from './AddForm'
import './Component1.scss'
import ChildComponent from './ChildComponent'
class Component extends React.Component {
    constructor() {
        super();
        this.state = {
            chang : false,
            arrPerson : [
                {
                    id : 1,
                    titleJob : 'John',
                    salary:2000
                },
                {
                    id : 2,
                    titleJob : 'Width',
                    salary:3000
                },
                {
                    id : 3,
                    titleJob : 'Born',
                    salary:4000
                },
            ],
        };
        this.inputRef = React.createRef();
    }
    
 
    handleAddListJob = (value) => {
        this.setState({
            arrPerson:[...this.state.arrPerson,value]
        })
    }
    handleemoveListJob(id) {
        // const newJobs = this.state.arrPerson.filter((item) => item.id !== id)
        // this.setState({arrPerson:newJobs});
        
        this.setState((prev)=>{
            prev.arrPerson.splice(id,1)
            console.log('next',prev)
            return {
                arrPerson:[...prev.arrPerson]
            }
        })
    }
    handleChangeJob(index) {
        this.setState({chang:true})
    }
    render() { 
    

        return (
            <div className="text">
            <AddForm inputRef={this.inputRef} handleAddListJob={this.handleAddListJob.bind(this)}/>
            <ChildComponent handleChangeJob={this.handleChangeJob.bind(this)} handleemoveListJob={this.handleemoveListJob.bind(this)}  arrPerson={this.state.arrPerson} />
        </div>
        );
    }
}
 
export default Component;


