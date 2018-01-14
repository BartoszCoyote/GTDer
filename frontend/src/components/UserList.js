import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Button } from 'react-bootstrap';

import * as actions from '../action';
import './UserList.css';
import { Link } from 'react-router-dom';


class UserList extends Component {


  componentDidMount() {
this.props.getAllUsers();
}

close(value){
  if (window.confirm("Are you sure u want to delete user?") === true)
  this.props.deleteUser(value, this.props.history)

else console.log("nie siema")}
  renderTasks() {
    

    const { admin } = this.props;
    console.log(admin)
    
    if (!admin || !Array.isArray(admin)) {
    	return null;
    }

    return _.map(admin, admin => {
      if( admin.id === 1){
        return null;
      }
      return (
     
        <div>
        <li className="list-group-item" key={admin.id}>
          
            <h2><span className="pull-xs-right">
              {admin.username }
            </span>
            </h2>
            <div className="projecttask">
            <strong>
              <h3>{ admin.usernamename }</h3>
            </strong>
            <Button onClick={this.close.bind(this,admin.id)}>Delete User</Button>

            </div>
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
  return { admin : state.admin };
}

export default connect(mapStateToProps, actions)(UserList);
