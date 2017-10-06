import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>
          { field.label }
        </label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />

      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    this.props.actions.signinUser({ username, password });
    this.setState({
      username: '',
      password: '',
    });
  }


  render() {
    let { username, password } = this.state;

    console.log('...', this.props);

    return (
      <form onSubmit={this.onSubmit}>

        <Field
          label="Username:"
          name="username"
          component={this.renderField}
          value={this.state.username}
          onChange={e => console.log(this.state) || this.setState({ username: e.target.value })}
        />
        <Field
          label="Password:"
          name="password"
          component={this.renderField}
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button action="submit" className="btn btn-primary"> Sign In</button>
      </form>

    );
  }
}


function mapStateToProps(state) {
  return { form: state.form };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

Signin = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);

export default reduxForm({
  form: 'signin',
})(Signin);
