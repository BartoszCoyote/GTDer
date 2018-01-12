import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as actions from '../action';


class Header extends Component {

  componentWillMount(){
    this.props.whosLOgged();
    console.log("kto?")
  }

  navbarLinks() {
    const user = this.props.user;
    if (this.props.authenticated) {

      return [

        <ul className="nav nav-tabs">


          <div className="center" onClick={() => {
            this.props.history.push('/dashboard');
          }}>
            <li className="nav-item" key="DashBoard"><Link to="/dashboard">
            </Link></li>
          </div>
          <li key="link"> <Link to={"/me"}>Logged as {user.toString()}</Link></li>

          <li className="nav-item" key="signout"><Link to="/signout">Sign
            out</Link></li>
        </ul>
      ];
    }
    return [
      <ul className="nav nav-tabs">
        <div className="center" onClick={() => {
          this.props.history.push('/dashboard');
        }}>
          <li className="nav-item test" key="DashBoardInny"><Link to="/dashboard">
          </Link></li>
        </div>
        <li className="nav-item" key="signin"><Link to="/signin">Sign in</Link>
        </li>

        <li className="nav-item" key="signup"><Link to="/signup">Sign up</Link>
        </li>
      </ul>
    ];
  }

  render() {
    console.log(this.props)
    return (
      <div className="barFull">
        <div className="bar">
          {this.navbarLinks()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps,actions)(Header));
