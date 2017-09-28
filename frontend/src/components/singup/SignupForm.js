import React, { Component } from 'react';


class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      login: '',
      password: '',
      firstname: '',
      lastname: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();  
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Register !</h1>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            onChange={this.onChange}
            value={this.state.email}
            type="text"
            name="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Login</label>
          <input
            value={this.state.login}
            onChange={this.onChange}
            type="text"
            name="login"
            className="form-control"
          />
        </div>

       

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">First Name</label>
          <input
            value={this.state.firstname}
            onChange={this.onChange}
            type="text"
            name="firstname"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Last Name</label>
          <input
            value={this.state.lastname}
            onChange={this.onChange}
            type="text"
            name="lastname"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;