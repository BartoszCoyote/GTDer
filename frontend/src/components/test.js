import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../action';
import _ from 'lodash';

class test extends Component {
  componentDidMount() {
    this.props.getTasks();
  }
  renderTasks() {

    return _.map(this.props.task, task => {
      return (
        <li className="list-group-item" key={task.id}>
          <h1> {task.name} </h1>
          {task.description}
        </li>
      )
    })
  }

  render() {

    return (

      <div>
        <ul className="list-group">
          {this.renderTasks()};
</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { task: state.task }
}


export default connect(mapStateToProps, actions)(test);
