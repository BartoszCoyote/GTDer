import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import * as actions from '../action';
import './List.css';

class List extends Component {

  componentDidMount() {
    this.props.getTasks();
  }

  renderTasks() {
    return _.map(this.props.task, task => {
      return (
        <li className="list-group-item" key={task.id}>
          <h1>{task.name}</h1>
          {task.projekt}
        </li>
      );
    });
  }

  render() {
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
  return {task: state.task};
}

export default connect(mapStateToProps, actions)(List);
