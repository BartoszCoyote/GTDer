import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Menu.css';
import * as actions from '../action';
import { connect } from 'react-redux';
import _ from 'lodash';


class Menu extends Component {

  componentDidMount() {
    this.props.getProjects();
  }

  renderTasks() {
    return _.map(this.props.project, project => {
      return (
        <ListItem
          key={project.id}
          primaryText={project.name}
          leftIcon={<ActionGrade />}
        />
      );
    });
  }




  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="menu">
            <List>
              <ListItem primaryText="Inbox" leftIcon={<ContentDrafts />} />
              <ListItem primaryText="Today" leftIcon={<ContentSend />} />
              <ListItem primaryText="Next 7 Days" leftIcon={<ContentSend />} />
              <ListItem
                primaryText="Projects"
                leftIcon={<ContentInbox />}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                  this.renderTasks()
                ]}
              />
              <ListItem
                primaryText="Labels"
                leftIcon={<ContentInbox />}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText="one"
                    leftIcon={<ActionGrade />}
                  />,
                  <ListItem
                    key={2}
                    primaryText="two"
                    leftIcon={<ContentSend />}
                    primaryTogglesNestedList={true}
                  />
                ]}
              />
              <div className="bottom">
                <ListItem primaryText="Trash" leftIcon={<ContentDrafts />} />

              </div>
            </List>

          </div>
        </div>
      </MuiThemeProvider>

    );
  }
}


function mapStateToProps(state) {
  return { project: state.project };
}

export default connect(mapStateToProps, actions)(Menu);
