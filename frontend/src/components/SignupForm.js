import React, { Component } from 'react';

class SignupForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

onChange(e){

    this.setState({[ e.target.name]: e.target.value });
}
onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
}

    render() {
        return (
            
          <form onSubmit={this.onSubmit}>
              <h1> Welcome </h1>

              <div className="form-group">
                  <label className="control-label"> Username </label>
                  <input
                  value={this.state.username}
                  onChange={this.onChange}
                    type="text"
                    name="username"
                    className="from-control"
                    />
              </div>
         


          <div className="from-group">
              <button className="btn btn-primary btn-lg">
                    Sing Up
                  </button>

            
          </div>

          </form>
        );
    }
}

export default SignupForm;