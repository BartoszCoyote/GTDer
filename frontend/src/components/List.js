import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../action';
import './List.css';


class List extends Component {
  componentDidMount() {
    this.props.getTasks('Inbox');
  }

  renderTasks() {
  	const { task } = this.props;
    
    if (!task || !Array.isArray(task)) {
    	return null;
    }
    
    return task.map(({ id, project, name, description }) => {
    	const style = { color: project.color };
      
      return (
        <li className="list-group-item" key={id}>
          <Link to={`task/${id}`}>
            <span className="pull-xs-right" style={style}>
              { name }
            </span>
            <strong style={style}>
              { description }
            </strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="task-list">
        <ul className="list-group">
          { this.renderTasks() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { task: state.task };
}

export default connect(mapStateToProps, actions)(List);