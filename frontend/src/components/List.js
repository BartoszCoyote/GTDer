import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../action';
import './List.css';

class List extends Component {


  componentDidMount() {
    this.props.getTasks();
  }

  renderTasks() {
    return _.map(_.sortBy(this.props.task, this.props.task.name), task => {
      return (
        <li className="list-group-item" key={task.id}>
          {task.name},{task.description}

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
  return { task: state.task };
}

export default connect(mapStateToProps, actions)(List);
