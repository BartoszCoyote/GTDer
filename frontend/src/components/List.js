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
  	const { task } = this.props;
    
    if (!task || !Array.isArray(task)) {
    	return null;
    }
    
    return task.map(({ id, project, name, description }) => {
      const style = { color: project.color };
      
      return (
        <div>
        <li className="list-group-item" key={id}>
          <Link to={`task/${id}`}>
            <h2><span className="pull-xs-right" style={style}>
              { name }
            </span>
            </h2>
            <div className="projecttask">
            <strong style={style}>
              <h3>{ project.name }</h3>
            </strong>
            </div>
          </Link>
        </li>
        </div>
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
