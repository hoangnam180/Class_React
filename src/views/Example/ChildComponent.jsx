import React from 'react';
class ChildComponent extends React.Component {
    state = {
        showJob: false,
    }
    //rename button 

    handleClickChange = (index) => {
        this.props.handleChangeJob(index)
    }
        render() 
        {
            const {arrPerson} = this.props
            return (
                
                <div>
                    {
                    this.state.showJob === false ?
                    <button onClick={()=>this.setState({showJob:true})}>
                    Show
                    </button>

                    :
                    <>
                    {arrPerson.map((person,index) =>(
                        <div key={person.id}>{person.titleJob} - {person.salary} 
                        <span 
                        style={{marginLeft:'100px'}}
                        onClick={()=>this.props.handleemoveListJob(index)}
                        >X
                        </span>
                        <span 
                        style={{marginLeft:'100px'}}
                        onClick={()=>this.handleClickChange(index)}
                        >Sửa
                        </span>
                        </div>
                    ))}

                    <button onClick={()=>this.setState({showJob:false})}>
                    Hide
                    </button>
                    </>
                    }
                   
                </div>
            );
        }
}
export default ChildComponent;