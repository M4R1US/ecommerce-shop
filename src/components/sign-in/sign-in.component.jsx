import React from 'react';

import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss"
import CustomButton from "../custom-buttom/custom-button.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

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
          <CustomButton type='submit'>SIGN IN</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
