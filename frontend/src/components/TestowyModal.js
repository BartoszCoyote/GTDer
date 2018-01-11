import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'
import './TestowyModal.css';
import * as actions from '../action';
import 'react-day-picker/lib/style.css';

import DayPicker from 'react-day-picker';

class TestowyModal extends Component {

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: "No selected date",
    };
  }
  handleDayClick(day, { selected }) {

    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

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
    console.log(this.state.selectedDay)
    this.props.actions.postNewTask(this.props.history, { ...values, selectedDay: this.state.selectedDay });
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

  renderSelect(field) {
    return (
      <div>
        <label>{field.label}</label>
        <select
          className="form-control"
          type="text"
          {...field.input}>
          <option value=""></option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
        </select>
      </div>

    )
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


    return (

      <div className="ModalowyButton">

        <div className="ButtonModal">
          <Button
            bsStyle="danger"
            bsSize="large"
            onClick={this.open.bind(this)}
            className="button"


          >
            Add task
            </Button>
        </div>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
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
                <Field
                  label="project:"
                  name="project"
                  component={this.renderSelect}

                />
                <div>
                  <DayPicker
                    selectedDays={this.state.selectedDay}
                    onDayClick={this.handleDayClick}
                  />
                </div>
                <button type="submit" className="btn btn-primary"> Add</button>


                {this.errorMessage()}
              </form>
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

