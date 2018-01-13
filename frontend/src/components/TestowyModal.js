import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'
import './TestowyModal.css';
import * as actions from '../action';
import 'react-day-picker/lib/style.css';
import _ from 'lodash';
import { SketchPicker } from 'react-color';


import DayPicker from 'react-day-picker';

class TestowyModal extends Component {

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.renderSelect = this.renderSelect.bind(this);


    this.state = {
      selectedDay: "No selected date",
      color: "FF0000",
      projects: []
    };
  }

  componentDidMount(){
    this.props.actions.getProjects()
    this.setState({projects: this.props.project})

    
  
  }

  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
  };

  componentWillReceiveProps(nextProps){

    this.setState({projects:nextProps.project})

 

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
    console.log("onSubmit")
    console.log(values)
    this.props.actions.postNewTask(this.props.history, { ...values, selectedDay: this.state.selectedDay });
  }

  onSubmitProject(values) {
    this.props.actions.postNewProject({...values, color:this.state.color});
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


	renderOptions()
{
	const projects = this.state.projects;
  return projects.map(project => <option value={project.name}>{project.name}</option>);
}


  renderSelect(field) {
    console.log(this)
    return (
      <div>
        <label>{field.label}</label>
        <select
          className="form-control"
          type="text"
          {...field.input}>

        {this.renderOptions()}
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


  openProject(){
    this.setState({showModalProject: true})
  }

  closeProject(){
    this.setState({showModalProject: false})
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
            <Button
            bsStyle="danger"
            bsSize="large"
            onClick={this.openProject.bind(this)}
            className="button"


          >
            Add project
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
                  label="Name:"
                  name="name"
                  component={this.renderField}
                />
                <Field
                  label="Description:"
                  name="description"
                  component={this.renderField}
                />
                <Field
                  label="Project:"
                  name="project"
                  component={this.renderSelect}

                />
                <div>
                  <DayPicker
                    selectedDays={this.state.selectedDay}
                    onDayClick={this.handleDayClick}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Add Task</button>


                {this.errorMessage()}
              </form>
            </div>



          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>

         <Modal show={this.state.showModalProject} onHide={this.closeProject.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <div className="loginForm">
              <form onSubmit={handleSubmit(this.onSubmitProject.bind(this))}>
               
                <Field
                  label="Name:"
                  name="name"
                  component={this.renderField}
                />
                 <SketchPicker
        color={ this.state.color }
        onChangeComplete={ this.handleChangeComplete }
      />
            <br />

                <button type="submit" className="btn btn-primary">Add Project</button>


                {this.errorMessage()}
              </form>
            </div>



          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeProject.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};


function validate(values) {
  const errors = {};
  if (!values.description) {
    errors.descriptiom = 'Enter Description';
  }
  if (!values.name) {
    errors.name = 'Enter Task Name';
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    task: state.form,
    project: state.project,
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

