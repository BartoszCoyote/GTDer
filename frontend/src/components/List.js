import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../action';
import './List.css';
import { Link } from 'react-router-dom';


class List extends Component {


  constructor(props) {
    super(props);
   
    this.state = {
     tasks: []
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({tasks:nextProps.task})
  }
  componentDidMount() {
    var xd = 'Inbox';
    this.props.getTasks(xd);
    this.setState({tasks:this.props.task})
  }

  renderTasks() {
    return _.map(this.state.tasks, task => {
      return (
        <li className="list-group-item" key={task.id}>
          <Link to={"task/" + task.id}>
            <span className="pull-xs-right" style={{color:task.project.color}}>{task.name} </span>
            <strong style={{color:task.project.color}}>{task.description} </strong>
            

          </Link>

        </li>
      );
    });
  }

  render() {
    console.log("siema")
    console.log(this.state.tasks)
    return (
      <div className="task-list">
        <ul className="list-group">
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { task: state.task };
}

export default connect(mapStateToProps, actions)(List);
