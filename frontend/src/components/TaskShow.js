import React, { Component } from 'react';
import './TaskShow.css';
import * as actions from '../action';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';





class TaskShow extends Component {


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
        console.log(this.props.task.project)

        return (





            <div className="task-list">


                <h1>Name</h1>{this.props.task.name}
                <h1>Selected Day</h1>{this.props.task.selectedDay}

                <h1>description</h1> {this.props.task.description}
                <h1>project name </h1> {this.props.task.project.name}





                <Button onClick={this.close.bind(this)}>Close</Button>




            </div>
        );
    }
}



function mapStateToProps(state) {
    return { task: state.task };
}



export default connect(mapStateToProps, actions)(TaskShow);

