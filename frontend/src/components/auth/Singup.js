import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../action';
import { Link } from 'react-router-dom';


class Signup extends Component{


    errorMessage() {
        if (this.props.errorMessage) {
          return (
            <div className="info-red">
              {this.props.errorMessage}
            </div>
          );
        }
      }

renderField(field){
    const { meta: { touched, error} } = field;
    const className= `form-group ${touched && error ? 'has-error' : ''}`;
    
    return(
    <div className={className}>
        <label>{field.label}</label>
            <input
                className="form-control"
                type="text"
                {...field.input}
                />
                <div className="text-help">
                {touched ? error : ''}
                </div>
    </div>
    );
}
onSubmit(values){
  this.props.actions.signupUser(values,this.props.history);
    }

render(){

    const { handleSubmit } = this.props; 
       return(
        <div className="form">
        <div className="container">
            <h1> Sign Up </h1>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
                label="Username:"
                name="username"
                component={this.renderField}
            />
            <Field
                label="Password:"
                name="password"
                component={this.renderField}
            />
            <Field
                label="Email:"
                name="email"
                component={this.renderField}
            />
            <Field
                label="First Name:"
                name="firstname"
                component={this.renderField}
            />
            <Field
                label="Last Name:"
                name="lastname"
                component={this.renderField}
            />
            <button type="submit" className="btn btn-primary"> Sign In </button>
            <Link to="/" className="btn btn-danger"> Cancel </Link>

        </form>
    {this.errorMessage()}
    
    </div>
  </div>

       
    );
}
}

function validate(values){
    const errors = {};
    if(!values.username){
        errors.username = "Enter Username";
    }
    if(!values.password){
        errors.password = "Enter Password";
    }
    if(!values.lastname){
        errors.lastname = "Enter Last Name";
    }
    if(!values.firstname){
        errors.firstname = "Enter First Name";
    }
    if(!values.email){
        errors.email = "Enter Email";
    }

    return errors;
}



function mapStateToProps(state) {
    return { 
        form: state.form,
        errorMessage: state.auth.error
};
}

const mapDispatchToProps = (dispatch)=> {
    return {
        actions : bindActionCreators(actions , dispatch)
    };
    }


Signup = connect(
    mapStateToProps,
    mapDispatchToProps 
)(Signup);
    
export default reduxForm({
    validate,
form: 'signup'
})(Signup);