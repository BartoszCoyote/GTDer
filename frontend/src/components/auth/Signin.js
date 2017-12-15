import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as actions from '../../action';
import './Signin.css';

class Signin extends Component {

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;

    return (
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

  onSubmit(values) {
    console.log(this.props)
    this.props.actions.signinUser(values, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="loginForm">
          <div id="image">
            <a href="/"> </a>
          </div>
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
            <button type="submit" className="btn btn-primary"> Login</button>
          </form>
          {this.errorMessage()}
          <div className="AccountCreate"><b>Don't have account??</b> <Link
            to="/signup" className="btn btn-info"> Sign Up </Link></div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'Enter Username';
  }
  if (!values.password) {
    errors.password = 'Enter Password';
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    form: state.form,
    errorMessage: state.auth.error
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};


Signin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);

export default reduxForm({
  validate,
  form: 'signin'
})(Signin);
