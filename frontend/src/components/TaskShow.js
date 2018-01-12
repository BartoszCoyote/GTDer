import React, { Component } from 'react';
import './TaskShow.css';
import * as actions from '../action';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class TaskShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            selectedDay: "",
            project:"",
            current: 'EDIT'
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
        console.log("siema")
        console.log(this.props.editTask)
        this.props.editTask(this.props.match.params.id, this.props.history, {

            name: this.state.name,
            description: this.state.description
        });

    }
    renderEdit() {



        const { name, description } = this.state;
        return (
            <div>
                <div>
                    <textarea placeholder={name} onChange={event => this.setState({ name: event.target.value })} />



                </div>
                <div>
                    <textarea placeholder={description} onChange={event => this.setState({ description: event.target.value })} />/>
                    <button onClick={() => this.clickSave()}>
                        Save
        </button>
                    <Button onClick={this.close.bind(this)}>Close</Button>
                    <Button onClick={this.deleteConfirm.bind(this)}>Delete</Button>

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

