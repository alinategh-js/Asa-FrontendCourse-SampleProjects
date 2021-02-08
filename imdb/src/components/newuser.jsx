import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

class NewUser extends Component {

    state={
        email: '',
        firstName: '',
        lastName: '',
        redirectToPrevious: false
    }

    formSubmitted = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/users', {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
        });
        this.setState({
            redirectToPrevious: true
        })
    }

    handleChange = (e) => {
        const target = e.target;
        this.setState({[target.name]: target.value})
    }

    render(){
        if(this.state.redirectToPrevious === true){
            return <Redirect to="/users"/>
        }
        return(
            <form className='m-2' onSubmit={this.formSubmitted}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
                    <input 
                        type="email" 
                        onChange={this.handleChange} 
                        className="form-control" 
                        id="inputEmailAddress" 
                        placeholder="name@example.com" 
                        value={this.state.email} 
                        name='email'
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange={this.handleChange} 
                        id='inputFirstName' 
                        placeholder='First Name' 
                        value={this.state.firstName} 
                        name='firstName'
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange={this.handleChange} 
                        id='inputLastName' 
                        placeholder='Last Name' 
                        value={this.state.lastName} 
                        name='lastName'
                        required
                    />
                </div>
                <div className="mb-3">
                    <button 
                        type="submit" 
                        className="btn btn-primary mb-3"
                    >
                        Add User
                    </button>
                </div>
            </form>
        );
    }
}

export default NewUser;