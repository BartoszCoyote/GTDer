import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../action';
import './List.css';
import { Link } from 'react-router-dom';


class List extends Component {


  componentDidMount() {
    var xd = 'Inbox';
    this.props.getTasks(xd);
  }

  renderTasks() {
    return _.map(_.sortBy(this.props.task, this.props.task.name), task => {
      return (
        <li className="list-group-item" key={task.id}>
          <Link to={"task/" + task.id}>
            <span className="pull-xs-right">{task.name} </span>
            <strong>{task.description} </strong>
          </Link>

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
