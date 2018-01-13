import React, { Component } from 'react';
import './TaskShow.css';
import * as actions from '../action';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class TaskShow extends Component {

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            name: "",
            description: "",
            selectedDay: "",
            project:"",
            current: 'EDIT',
            day:"No selected date"
        }
    }

    changeComponentState(newState) {
        this.setState({
            current: newState,
        });
    }



    deleteConfirm() {
        if (window.confirm("Are you sure u want to delete task?") === true)
            this.props.deleteTask(this.props.match.params.id, this.props.history)

        else console.log("nie siema")


    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.task.name,
            description: nextProps.task.description,
            selectedDay: nextProps.task.selectedDay,
            project: nextProps.task.project.name
        });
    }

    handleDayClick(day) {
            console.log("handledayclick")
            console.log(day)
        this.setState({
          day: day
        });
      }
    
    renderFull() {





        const { name, description,selectedDay,project } = this.state;
        return ( 
        <div className="container">
        <div className="loginForm">
        <div>
                
                <h1>
                    Name: {name} 
                </h1>
                <h1>
                    Description: {description} 
                </h1>
                <h1>
                    Date: {selectedDay} 
                </h1>
                <h1>
                    Project: {project} 
                </h1>
                <center>
                <Button className="btn btn-light" onClick={this.changeComponentState.bind(this, 'FULL')}>EDIT</Button>

                <Button className="btn btn-info" onClick={this.close.bind(this)}>Close</Button>
               <Button className="btn btn-danger" onClick={this.deleteConfirm.bind(this)}>Delete</Button>
</center>
            </div>
        </div>
        </div>

           
        );
    }

    clickSave() {
        this.changeComponentState('EDIT');
            console.log("dAY")
            console.log(this.state.day)
        this.props.editTask(this.props.match.params.id, this.props.history, {

            name: this.state.name,
            description: this.state.description,
            selectedDay:this.state.day
        });

    }
    renderEdit() {



        const { name, description } = this.state;
        return (
            <div className="container">
        <div className="loginForm">
            <div>
                <div>
                    <div>
                        <h2>
                    Name:
                    </h2>
                    </div>
                    <textarea placeholder={name} className="textarea" onChange={event => this.setState({ name: event.target.value })} />



                </div>
                <div><div>
                    <h2>
                    Description:
                    </h2>
                    </div>
                    <textarea placeholder={description} className="textarea" onChange={event => this.setState({ description: event.target.value })} />
                    <div>
                        <center>
                  <DayPicker
                    selectedDays={this.state.day}
                    onDayClick={this.handleDayClick}
                  />
                  </center>
                </div>
                   <center>
                    <Button className="btn btn-light" onClick={() => this.clickSave()}>
                        Save
        </Button> 
        <Button className="btn btn-info" onClick={this.close.bind(this)}>Close</Button>
        <Button className="btn btn-danger" onClick={this.deleteConfirm.bind(this)}>Delete</Button>
</center>
                </div>
            </div >
            </div>
            </div >
        );
    }

    componentDidMount() {
        this.props.getTaskByID(this.props.match.params.id);



    }

    close() {
        this.props.history.goBack();
    }

    render() {


        if (this.props.task.project === undefined) {
            return (
                <div>Loading</div>
            )
        }


        const { current } = this.state;

        if (current === 'EDIT') {
            return this.renderFull();
        } else if (current === 'FULL') {
            return this.renderEdit();
        }

        return null;
    }

}



function mapStateToProps(state) {
    return { task: state.task };
}



export default connect(mapStateToProps, actions)(TaskShow);

