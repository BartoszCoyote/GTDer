import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../action';

class Signout extends Component {
  componentDidMount() {
    this.props.signoutUser();
  }

  render() {
        	const style = { fontSize: "140px"};

    return (
      <div><center><h1 style={style}>Good Bye</h1></center>
      <center>
      <iframe src="https://giphy.com/embed/UQaRUOLveyjNC" width="480" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mrw-reddit-profile-UQaRUOLveyjNC"></a></p>
        </center>
     </div>
    )
  }
}

export default connect(null, actions)(Signout);
