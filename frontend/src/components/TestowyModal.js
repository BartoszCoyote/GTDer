import React, { Component } from 'react';
import { Popover, Button, Tooltip, Modal, OverlayTrigger } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

import * as actions from '../action';

class TestowyModal extends Component {

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }



  onSubmit(values) {


    this.props.actions.postNewTask(values, this.props.history);

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

  componentWillMount() {

    this.setState({
      showModal: false
    })
  };

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const { handleSubmit } = this.props;

    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
          </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
          </Tooltip>
    );



    return (

      <div>

        <div className="ButtonModal">
          <Button
            bsStyle="primary"
            bsSize="small"
            onClick={this.open.bind(this)}
            className="button"


          >
            Launch demo modal
            </Button>
        </div>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <div className="loginForm">
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  label="description:"
                  name="description"
                  component={this.renderField}
                />
                <Field
                  label="name:"
                  name="name"
                  component={this.renderField}
                />
                <button type="submit" className="btn btn-primary"> Login</button>
              </form>
              {this.errorMessage()}

            </div>



          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};


function validate(values) {
  const errors = {};
  if (!values.description) {
    errors.descriptiom = 'Enter Username';
  }
  if (!values.name) {
    errors.name = 'Enter Password';
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    task: state.form,
    errorMessage: state.auth.error
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

TestowyModal = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TestowyModal));

export default reduxForm({
  validate,
  form: 'tasks'
})(TestowyModal);

