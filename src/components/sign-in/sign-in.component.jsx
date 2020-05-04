import React from 'react';

import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss"
import CustomButton from "../custom-buttom/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (Exception) {
      console.log(Exception.message);
    }
    
    this.setState({email: '', password: ''});
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in" onSubmit={this.handleSubmit}>
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput name='email' label='email' value={this.state.email} type='email' required handleChange={this.handleChange} />
          <FormInput name='password' label='password' value={this.state.password} type='password' required handleChange={this.handleChange} />
          <div className="buttons">
            <CustomButton type='submit'>SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
