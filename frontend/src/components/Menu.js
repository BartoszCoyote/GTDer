import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';
import './Menu.css';


export default class ListExampleNested extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="menu">
            <List>
              <ListItem primaryText="Inbox" leftIcon={<ContentDrafts/>}/>
              <ListItem primaryText="Today" leftIcon={<ContentSend/>}/>
              <ListItem primaryText="Next 7 Days" leftIcon={<ContentSend/>}/>
              <ListItem
                primaryText="Projects"
                leftIcon={<ContentInbox/>}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText="one"
                    leftIcon={<ActionGrade/>}
                  />,
                  <ListItem
                    key={2}
                    primaryText="two"
                    leftIcon={<ContentSend/>}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    containerElement={<Link to="/linkdoczegos"/>}

                  />
                ]}
              />
              <ListItem
                primaryText="Labels"
                leftIcon={<ContentInbox/>}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText="one"
                    leftIcon={<ActionGrade/>}
                  />,
                  <ListItem
                    key={2}
                    primaryText="two"
                    leftIcon={<ContentSend/>}
                    primaryTogglesNestedList={true}
                  />
                ]}
              />
              <div className="bottom">
                <ListItem primaryText="Trash" leftIcon={<ContentDrafts/>}/>

              </div>
            </List>

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
