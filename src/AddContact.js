import React from 'react';


class AddContact extends React.Component 
{
    constructor() {
        super();

        this.state = {
            name : "",
            email : ""
        }

        this.add = (e) => {
            e.preventDefault();
            if(this.state.name === "" || this.state.email === "")
            {
                alert("Enter all the fields");
                return;
            }

            this.props.addContactHandler(this.state);
            this.setState({name : "",email : ""})
            
        }
    }
    render(){
        return (
            <>
            <div>
                <label>Name</label>
                <input type = "text" placeholder = "enter your name" value = {this.state.name} onChange = {(e)=>this.setState({name : e.target.value})}/>
            </div>
            <div>
                <label>Email</label>
                <input type = "text" placeholder = "enter your email" value={this.state.email} onChange = {(e)=>this.setState({email : e.target.value})}/>
            </div>

            <button onClick={this.add}>Submit</button>
            </>


            )
    }
        
    
}

export default AddContact;