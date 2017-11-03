import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component{
  navbarLinks() {
    if (this.props.authenticated) {
      return [
        <ul className="nav nav-tabs">
        <div className="center">
        <li className="nav-item" key="DashBoard"><Link to="/dashboard"> Dashboard </Link></li>
        </div>
        <li className="nav-item" key="signout"><Link to="/signout">Sign out</Link></li>
        </ul>
      ];
    }
    return [
      <ul className="nav nav-tabs">
        <div className="center">
        <li className="nav-item test" key="DashBoard"><Link to="/dashboard"> Main Page </Link></li>
        </div>
      <li className="nav-item" key="signin"><Link to="/signin">Sign in</Link></li>
      <li className="nav-item" key="signup"><Link to="/signup">Sign up</Link></li>
      </ul>
    ];
  }

  render() {
    return (
          <div className="barFull">
      <div className="bar">
  
  {this.navbarLinks()}

        </div></div>
      
    );
  }
}


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
