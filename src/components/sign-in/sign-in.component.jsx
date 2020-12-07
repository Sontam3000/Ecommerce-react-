import React from 'react';
import  './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        };
       
    }
    handleSubmit= event =>{
        event.preventDefault();
        this.setState({email:'',password:''})
    };
    handleChange=event=>{
        const { value, name }=event.target;
        this.setState({[name]:value})
    };

    render(){
      return (
      <div className='signin'>
        <h2>I already have an account</h2>
        <span>Sign In With Your Email And Password</span>  
        <form onSubmit={this.handleSubmit}>
        <FormInput 
            type='email' 
            name='email' 
            handleChange={this.handleChange}
            value={this.state.email} 
            label='email'
            required
        /> 
        
        <FormInput 
            type='password' 
            name='password'
            label='password'
            handleChange={this.handleChange} 
            value={this.state.password}
            required
        /> 
        
        <CustomButton>Sign In</CustomButton>
        </form>
        
        </div>
        );
    }
}
export default SignIn;